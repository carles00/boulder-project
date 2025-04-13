import useUser from "../../context/userContext/useUser";
import useUserAuthenticated from "../../hooks/useUserAuthenticated";

export default function LoginPage() {
  useUserAuthenticated();
  const {logIn} = useUser();

  return (
    <>
      <button onClick={()=>{logIn('test@example.com','password1234')}}>Login</button>
    </>
  );
}
