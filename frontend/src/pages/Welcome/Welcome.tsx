import { useForm, SubmitHandler } from "react-hook-form";
import FormComponent from "../../lib/components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateUser } from "../../api/UsersApi";
import "./Welcome.css";
import { useNavigate } from "react-router";

interface IFormInput {
  username: string;
  description: string;
}

export default function Welcome() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => createDbUser(data);

  const createDbUser = async (input: IFormInput) => {
    const token = await getAccessTokenSilently();
    const response = await CreateUser(token, user!, input.username);
    if(response.ok){
      navigate("/dashboard")
    } 
  };

  return (
    <>
      <main className="welcome-container">
        <h2>Welcome to BloulderProjekt!</h2>
        <FormComponent method="post" onSubmit={handleSubmit(onSubmit)}>
          <FormComponent.FormInput
            type="text"
            label="Username"
            name="username"
            register={register("username", { required: true, maxLength: 50 })}
          />
          <FormComponent.SubmitButton>
          Create User
          </FormComponent.SubmitButton>
        </FormComponent>
      </main>
    </>
  );
}
