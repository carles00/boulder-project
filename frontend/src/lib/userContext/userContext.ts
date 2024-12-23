import { createContext } from "react";
import { User } from "../../types/User";

interface IUserContext{
  isAuthenticated: boolean,
  user: User | null,
  addUser: (user: User) => void,
  removeUser: () => void
}


export const UserContext = createContext<IUserContext | null >(null);