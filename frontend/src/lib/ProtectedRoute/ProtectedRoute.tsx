import { useNavigate } from "react-router";
import { useEffect } from "react";
import useUser from "../userContext/useUser";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const {isLoaded, loadUser} = useUser();


  const GetDbUser = async () => {
    await loadUser();
  }

  if(isLoaded){
    return children
  }

  return <div>loading</div>
}
