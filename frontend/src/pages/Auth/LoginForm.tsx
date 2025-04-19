import { useActionState } from "react";
import FormComponent from "../../components/Form";
import useUser from "../../context/userContext/useUser";

export default function LoginForm() {
  const { logIn } = useUser();

  const [loginState, loginAction] = useActionState(
    async (_ : unknown, formData: FormData) =>{
      const email = formData.get("email");
      const password = formData.get("password");
      
      //TODO data verification
      if(!email || !password){
        return {
          error: 'Missing fields'
        }
      }

      await logIn(email.toString(), password.toString());

      return {
        error: null,
      }
    },
    null,
  );

  return (
    <>
      <FormComponent action={loginAction}>
        <FormComponent.FormInput type="email" name="email" label="Email" />
        <FormComponent.FormInput
          type="password"
          name="password"
          label="Password"
        />
        <FormComponent.FormError message={loginState?.error}/>
        <FormComponent.SubmitButton>Log In</FormComponent.SubmitButton>
      </FormComponent>
    </>
  );
}
