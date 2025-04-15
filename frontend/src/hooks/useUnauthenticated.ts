import { useNavigate } from "react-router";
import useUser from "../context/userContext/useUser";
import { useEffect } from "react";

export default function useUnauthenticated(){
  
    const navigate = useNavigate()
    const {user} = useUser();
  
    useEffect(()=>{
        if(user){
          navigate('/feed')
        }
      },[user, navigate]);
  
}