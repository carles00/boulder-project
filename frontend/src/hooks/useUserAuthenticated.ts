import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../context/userContext/useUser";

export default function useAuthenticated(){
  const navigate = useNavigate()
  const {user} = useUser();

  useEffect(()=>{
      if(!user){
        navigate('/')
      }
    },[user, navigate]);
}