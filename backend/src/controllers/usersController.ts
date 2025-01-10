import express from "express";
import prisma from "../utils/prismaClient";
import { RequestUser, User, UserWithPassword } from "../types/user";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import PrismaErrorHandler from "../utils/prismaErrorHandler";
import bcrypt from "bcrypt";
import { validateAccessToken } from "../middleware/auth";

const router = express.Router();

router.get('/test', validateAccessToken, async (req, res) => {
  res.status(200).send({text: 'ok'});
});

router.post("", async (req, res) => {
  let user = req.body as UserWithPassword;
  if (!user.username || !user.email || !user.password) res.sendStatus(400);

  bcrypt.hash(user.password!, 2, async function (err, hash) {
    try {
      let userCreated = await prisma.user.create({
        data: {
          email: user.email,
          username: user.username,
          name: user.name,
          password: hash,
        },
      });

      res.status(200).send(userCreated as RequestUser);
    } catch (ex) {
      if (ex instanceof PrismaClientKnownRequestError)
        res.status(400).send("Unable to create user");
      else throw ex;
    }
  });
});

router.get("", async (req, res) => {
  const userParam = req.query.user;
  const password = req.query.password as string;

  if (!userParam) {
    res.sendStatus(400);
    return;
  }

  try {
    let user = await prisma.user.findFirstOrThrow({
      where: {
        OR: [
          {
            email: {
              equals: userParam as string,
            },
          },
          {
            username: {
              equals: userParam as string,
            },
          },
        ],
      },
    });

    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          let userPayload : User = {...user}
          console.log(userPayload)
          res.send(user);
        } else {
          res.sendStatus(403);
        }
      });
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError)
      PrismaErrorHandler(res, error);
    else throw error;
  }
});

router.patch("/:id", async (req, res) => {
  let userId = Number(req.params.id);
  let updatedUser = req.body as User;
  let fieldsToUpdate = Object.getOwnPropertyNames(updatedUser);
  if (fieldsToUpdate.some((f) => f === "email" || f === "userName"))
    res.sendStatus(400);

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: updatedUser.name,
        picture: updatedUser.picture,
        description: updatedUser.description,
        gymId: updatedUser.gymId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.delete("/:id", async (req, res) => {
  let userId = Number(req.params.id);
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    res.send(204).send();
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError)
      PrismaErrorHandler(res, error);
    else throw error;
  }
});

export default router;
