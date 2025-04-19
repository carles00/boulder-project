import { useActionState } from "react";
import FormComponent from "../../components/Form";
import useUser from "../../context/userContext/useUser";

export default function SignUpForm(){
  const {signUp} = useUser();

  const [signUpState, signUpAction] = useActionState(
    async (_: unknown, formData: FormData) => {
      const email = formData.get("email");
      const password = formData.get("password");
      const name = formData.get("username");
      
      //TODO data verification
      if(!email || !password || !name){
        return {
          error: 'Missing fields'
        }
      }

      await signUp(email.toString(), password.toString(), name?.toString());

      return {
        error: null,
      }
    },
    null
  );


  return(
    <FormComponent action={signUpAction}>
      <FormComponent.FormInput type="text" name="username" label="Username"/>
      <FormComponent.FormInput type="email" name="email" label="Email"/>
      <FormComponent.FormInput type="password" name="password" label="Password"/>
      <FormComponent.FormError message={signUpState?.error}/>
      <FormComponent.SubmitButton>Sign Up</FormComponent.SubmitButton>
    </FormComponent>
  )
}