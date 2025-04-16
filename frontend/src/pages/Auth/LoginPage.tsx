import { useActionState } from "react";
import FormComponent from "../../components/Form";
import useUser from "../../context/userContext/useUser";

export default function LoginForm() {
  const {logIn} = useUser();
  const [loginState, loginAction] = useActionState((prevState:unknown, formData: FormData)=>{
    console.log(formData.get("email"))
  },null)

  const logInUser = () => {
    logIn('test@example.com','password1234')
  }

  return (
    <>
      <FormComponent action={loginAction}>
        <FormComponent.FormInput type="text" name="name" label="Username"/>
        <FormComponent.FormInput type="email" name="email" label="Email"/>
        <FormComponent.FormInput type="password" name="password" label="Password" />
        <FormComponent.SubmitButton>
          Submit
        </FormComponent.SubmitButton>
      </FormComponent>
    </>
  );
}
