import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../context/userContext/useUser";

export default function useUserAuthenticated(){
  const navigate = useNavigate()
  const {user} = useUser();

  useEffect(()=>{
      if(user){
        navigate('/feed')
      }else{
        navigate('/')
      }
    },[user, navigate]);
}