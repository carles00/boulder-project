import useUser from "../../context/userContext/useUser";
import useUnauthenticated from "../../hooks/useUnauthenticated";

export default function LoginPage() {
  useUnauthenticated();
  const {logIn, signUp} = useUser();

  return (
    <>
      <button onClick={()=>{logIn('test@example.com','password1234')}}>Login</button>
      <button onClick={()=>{signUp('test@example.com','password1234',"test")}}>Sign up</button>
    </>
  );
}
