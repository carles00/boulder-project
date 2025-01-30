import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { User } from "../../types/User";
import { Outlet } from "react-router";
import useApi from "../hooks/useApi";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function UserProvider() {
  const [dbUser, setUser] = useState<User | null>(null);
  const {getUser, createUser} = useApi()
  const {user} = useAuth0();

  useEffect(()=>{
    console.log(dbUser)
  },[dbUser])

  const isLoaded = (): boolean => dbUser !== null;

  const loadUser = async () => {
    let response = await getUser();
    if(response.ok){
      const userBody = await response.json() as User;
      setUser(userBody)
    }else{
      const userBody = await (await createUser(user)).json() as User;
      setUser(userBody);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoaded: isLoaded(),
        user: dbUser,
        loadUser: loadUser
      }}
    >
      <ProtectedRoute>
        <Outlet/>
      </ProtectedRoute>
    </UserContext.Provider>
  );
}
