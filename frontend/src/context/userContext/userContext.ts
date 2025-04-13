import { Session, User } from "better-auth";
import { createContext } from "react";

interface IUserContext{
  isLoaded: boolean,
  user: User | null,
  session: Session | null,
  logIn: (email: string, password: string) => Promise<void>,
  signUp: (email: string, password: string, name: string) => Promise<void>,
  logOut: () => Promise<void>
}


export const UserContext = createContext<IUserContext | null >(null);