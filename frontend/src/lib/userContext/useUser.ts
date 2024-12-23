import { useContext } from "react";
import { UserContext } from "./userContext";

export default function useUser(){
  const userContext = useContext(UserContext);
  return userContext!
}