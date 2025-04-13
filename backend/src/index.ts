import express from "express";
import usersRouter from "./controllers/usersController";
import  cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from "./middleware/error";
import { notFoundHandler } from "./middleware/notFound";
import { toNodeHandler } from "better-auth/node"
import { auth } from "../auth";

dotenv.config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());


app.use('/users', usersRouter);

//app.use(errorHandler);
//app.use(notFoundHandler)


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

  

