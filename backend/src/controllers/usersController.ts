import express from "express";

const router = express.Router();

router.get("/test", async (req, res) => {
  res.status(200).send({ text: "ok" });
});

router.post("", async (req, res) => {
  
});

router.get("", async (req, res) => {
  
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
