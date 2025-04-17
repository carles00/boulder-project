import { useActionState } from "react";
import FormComponent from "../../components/Form";
import useUser from "../../context/userContext/useUser";

export default function LoginForm() {
  const { logIn } = useUser();
  const [loginState, loginAction] = useActionState(
    (prevState: unknown, formData: FormData) => {
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      
      console.log(username, email, password)
      

      return {
        usernameError: null,
        emailError: null,
        passwordError: null
      }
    },
    null,
  );

  const logInUser = () => {
    logIn("test@example.com", "password1234");
  };

  return (
    <>
      <FormComponent action={loginAction}>
        <FormComponent.FormInput type="text" name="username" label="Username" />
        <FormComponent.FormInput type="email" name="email" label="Email" />
        <FormComponent.FormInput
          type="password"
          name="password"
          label="Password"
        />
        <FormComponent.SubmitButton>Submit</FormComponent.SubmitButton>
      </FormComponent>
    </>
  );
}
