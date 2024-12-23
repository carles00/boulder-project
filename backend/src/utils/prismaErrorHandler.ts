import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";

export default function PrismaErrorHandler(res: Response, error: PrismaClientKnownRequestError){
 
  switch(error.code){
    case 'P2025':
      res.status(404).send("resource not found");
    break;
    default:
      res.status(500).send("unhandled prsima error")
      break;
  }
}