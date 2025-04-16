import FormComponent from "../../components/Form";
import useUser from "../../context/userContext/useUser";

export default function LoginForm() {
  const {logIn} = useUser();

  const logInUser = () => {
    logIn('test@example.com','password1234')
  }

  return (
    <>
      <FormComponent method="post" onSubmit={logInUser}>
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
