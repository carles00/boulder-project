import { useState } from "react";
import { UserContext } from "./userContext";
import { User } from "../../types/User";
import { Outlet } from "react-router";
import { GetUser } from "../../api/UsersApi";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProvider() {
  const [user, setUser] = useState<User | null>(null);
  const [setupUser, setSetupUser] = useState(false);
  const {getAccessTokenSilently} = useAuth0();

  const isLoaded = (): boolean => user !== null || setupUser;

  const loadUser = async () => {
    const token = await getAccessTokenSilently();
    let response = await GetUser(token)
    if(response.ok){
      const userBody = await response.json();
      setUser(userBody)
    }else{
      setSetupUser(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoaded: isLoaded(),
        user: user,
        loadUser: loadUser,
        setupUser: setupUser
      }}
    >
      <Outlet/>
    </UserContext.Provider>
  );
}
