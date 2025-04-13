import { useEffect } from "react";
import useUser from "../../context/userContext/useUser";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const {user,logIn} = useUser();
  const navigate = useNavigate();
  useEffect(()=>{
    if(user){
      navigate('/feed')
    }
  },[user]);

  return (
    <>
      <button onClick={()=>{logIn('test@example.com','password1234')}}>Login</button>
    </>
  );
}
