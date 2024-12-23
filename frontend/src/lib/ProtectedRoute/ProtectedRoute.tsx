import { useNavigate } from "react-router";
import useUser from "../userContext/useUser";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  
  useEffect(()=>{
    if (!isAuthenticated) navigate("/");   
  },[isAuthenticated])

  return children;
}
