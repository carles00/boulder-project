import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { User } from "../../types/User";

interface Props {
  children: ReactNode;
  userString: string | null;
}

export default function UserProvider({ children, userString }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userString) setUser(JSON.parse(userString));
  }, [userString]);

  const isAuthenticated = (): boolean => user !== null;

  const addUser = (user: User) => {
    setUser(user);
    localStorage.setItem("blocker_user", JSON.stringify(user));
  };

  const removeUser = () => setUser(null);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated: isAuthenticated(),
        user: user,
        addUser: addUser,
        removeUser: removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
