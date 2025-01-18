import { useForm, SubmitHandler } from "react-hook-form";
import FormComponent from "../../lib/components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import "./Welcome.css";
import useUser from "../../lib/userContext/useUser";
import { User } from "../../types/User";

interface IFormInput {
  username: string;
  description: string;
}

export default function Welcome() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const {user} = useAuth0();
  const {createDbUser} = useUser();

  const onSubmit: SubmitHandler<IFormInput> = (data) => createUser(data);

  const createUser = async (input: IFormInput) => {
    const newUser : User = { sub: user!.sub!, email: user!.email!, username: input.username }
    await createDbUser(newUser)
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
