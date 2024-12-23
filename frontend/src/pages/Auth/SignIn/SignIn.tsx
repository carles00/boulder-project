import { Link, useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useUser from "../../../lib/userContext/useUser";
import FormComponent from "../../../lib/components/Form";

interface IFormInput {
  username: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [loginError, setLoginError] = useState("");
  const { addUser } = useUser();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => loginRequest(data);

  async function loginRequest(input: IFormInput) {
    const userData = {
      user: input.username,
      password: input.password,
    };

    const queryParams = new URLSearchParams(userData);

    const url = `${import.meta.env.VITE_API_URL}/users?`;
    const uri = url + queryParams.toString();

    let response = await fetch(uri);

    if (response.ok) {
      setLoginError("");
      try {
        let body = await response.json();
        addUser(body);
        navigate("/dashboard");
      } catch (err) {
        console.warn(err);
      }
    } else {
      if (response.status === 404) {
        setLoginError("USER_NOT_FOUND");
      }
      if (response.status === 403) {
        setLoginError("WRONG_PASSWORD");
      }
    }
  }

  return (
    <>
      <h3>Log In</h3>
      <FormComponent
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormComponent.FormInput
          type="text"
          label="User or Email"
          name="username"
          register={register("username", { required: true, maxLength: 50 })}
        />
        <FormComponent.FormInput
          type="password"
          label="Password"
          name="password"
          register={register("password", { required: true})}
        />
        <FormComponent.SubmitButton>
          Log In
        </FormComponent.SubmitButton>
      </FormComponent>
      {!!loginError && <p>{loginError}</p>}
      <Link className="signup-link" to="/">
        Don't have an account yet? Sign up now!
      </Link>
    </>
  );
}
