import express from "express";
import prisma from "../utils/prismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import PrismaErrorHandler from "../utils/prismaErrorHandler";
import { validateAccessToken } from "../middleware/auth";
import { User } from "../types/user";

const router = express.Router();

router.get("/test", validateAccessToken, async (req, res) => {
  res.status(200).send({ text: "ok" });
});

router.post("", validateAccessToken, async (req, res) => {
  const user = req.body as User;

  try {
    let userCreated = await prisma.user.create({
      data: {
        sub: user.sub,
        email: user.email,
        username: user.username,
      },
    });

    res.status(200).send(userCreated);
  } catch (ex) {
    if (ex instanceof PrismaClientKnownRequestError)
      res.status(400).send("Unable to create user");
    else throw ex;
  }
});

router.get("", validateAccessToken, async (req, res) => {
  let sub = req.auth?.payload.sub!
  try {
    let user = await prisma.user.findFirstOrThrow({
      where: {
        OR: [
          {
            sub: {
              equals: sub
            },
          },
        ],
      },
    });

    res.status(200).send(user);

  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError)
      PrismaErrorHandler(res, error);
    else throw error;
  }
});

router.patch("/:id", async (req, res) => {
  // let userId = Number(req.params.id);
  // let updatedUser = req.body as User;
  // let fieldsToUpdate = Object.getOwnPropertyNames(updatedUser);
  // if (fieldsToUpdate.some((f) => f === "email" || f === "userName"))
  //   res.sendStatus(400);

  // try {
  //   await prisma.user.update({
  //     where: {
  //       id: userId,
  //     },
  //     data: {
  //       name: updatedUser.name,
  //       picture: updatedUser.picture,
  //       description: updatedUser.description,
  //       gymId: updatedUser.gymId,
  //     },
  //   });
  //   res.sendStatus(204);
  // } catch (error) {
  //   res.sendStatus(400);
  // }
});

router.delete("/:id", async (req, res) => {
  // let userId = Number(req.params.id);
  // try {
  //   await prisma.user.delete({
  //     where: {
  //       id: userId,
  //     },
  //   });
  //   res.send(204).send();
  // } catch (error) {
  //   if (error instanceof PrismaClientKnownRequestError)
  //     PrismaErrorHandler(res, error);
  //   else throw error;
  // }
});

export default router;
