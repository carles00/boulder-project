import { createContext } from "react";
import { User } from "../../types/User";

interface IUserContext{
  isLoaded: boolean,
  user: User | null,
  loadUser: () => Promise<void>,
  setupUser: boolean;
  createDbUser: (user: User) => Promise<void>
}


export const UserContext = createContext<IUserContext | null >(null);