import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../userContext/useUser";
import Welcome from "../../pages/Welcome/Welcome";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const {isLoaded, loadUser, setupUser} = useUser();

  useEffect(()=>{
    if (!isAuthenticated) navigate("/");
    else GetDbUser();
  },[isAuthenticated])

  const GetDbUser = async () => {
    await loadUser();
  }

  if(isLoaded){
    console.log(setupUser)
    if(!setupUser)
        return children
    else
        return <Welcome/>
  }

  return <div>loading</div>
}
