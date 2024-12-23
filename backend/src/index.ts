import express from "express";
import usersRouter from "./controllers/usersController";
import  cors from 'cors';

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

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

  

