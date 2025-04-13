import { use } from "react";
import { UserContext } from "./userContext";

export default function useUser(){
  const userContext = use(UserContext);
  return userContext!
}