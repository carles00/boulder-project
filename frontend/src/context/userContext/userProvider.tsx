import { ReactNode, useCallback, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { Session, User } from "better-auth";
import { authClient } from "../../authClient";
import { useNavigate } from "react-router";

interface Props {
  children: ReactNode;
}

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  const getSession = useCallback(async () => {
    const { data } = await authClient.getSession();
    if (data) {
      setUser(data.user);
      setSession(data.session);
    } else {
      setUser(null);
      setSession(null);
    }
  }, []);

  const isLoaded = (): boolean => user !== null;

  const logIn = async (email: string, password: string) => {
    const { data } = await authClient.signIn.email({
      email,
      password,
    });
    if (data) {
      await getSession();
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    const { data } = await authClient.signUp.email({
      email,
      password,
      name,
    });
    if (data) {
      await getSession();
    }
  };

  const logOut = async () => {
    const { data } = await authClient.signOut();
    if (data?.success) {
      setUser(null);
      setSession(null);
      navigate("/");
    }
  };

  useEffect(() => {
    getSession();
  }, [getSession]);

  return (
    <UserContext.Provider
      value={{
        isLoaded: isLoaded(),
        user: user,
        session: session,
        logIn: logIn,
        signUp: signUp,
        logOut: logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
