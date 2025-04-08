import { ReactNode, useEffect } from "react";
import { authClient } from "./AuthClient";

interface Props{
  children: ReactNode
}

export default function AuthProvider({children}:Props){

  const login = async () => {
    const {data, error} = await authClient.signUp.email({
      email: "test@example.com",
      password: "password1234",
      name: "test",
      image: "https://example.com/image.png",

    })
    console.log('DATA: ',data, ' ERROR:' ,error)
  }

  useEffect(()=> {
    login();
  }, [])
  
  return(
    <>
      {children}
    </>
  )
}