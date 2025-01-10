import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  useEffect(()=>{
    if (!isAuthenticated) navigate("/");   
  },[isAuthenticated])

  return children;
}
