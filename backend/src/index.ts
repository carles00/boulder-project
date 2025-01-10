import express from "express";
import usersRouter from "./controllers/usersController";
import  cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from "./middleware/error";
import { notFoundHandler } from "./middleware/notFound";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELTETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

app.use('/users', usersRouter);

app.use(errorHandler);
app.use(notFoundHandler)

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

  

