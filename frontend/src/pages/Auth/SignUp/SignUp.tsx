import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useUser from "../../../lib/userContext/useUser";
import FormComponent from "../../../lib/components/Form";

interface IFormInput {
  email: string;
  username: string;
  password: string;
}

export default function SignUp() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [registerError, setRegisterError] = useState("");
  const onSubmit: SubmitHandler<IFormInput> = (data) => registerRequest(data);
  const { addUser } = useUser();
  const navigate = useNavigate();

  async function registerRequest(input: IFormInput) {
    const userData = {
      email: input.email,
      password: input.password,
      username: input.username,
    };

    const url = `${import.meta.env.VITE_API_URL}/users`;
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setRegisterError("");
      try {
        let body = await response.json();
        addUser(body);
        navigate("/dashboard");
      } catch (err) {
        console.warn(err);
      }
    } else {
      if (response.status === 400) {
        setRegisterError("USER_ALREADY_EXISTS");
      }
    }
  }

  return (
    <>
      <h3>Create an account</h3>
      <FormComponent method="post" onSubmit={handleSubmit(onSubmit)}>
        <FormComponent.FormInput
          type="email"
          label="Email"
          name="email"
          register={register("email", {
            required: true,
            maxLength: 50,
            pattern: /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        <FormComponent.FormInput
          type="text"
          name="username"
          label="Username"
          register={register("username", { required: true, maxLength: 50 })}
        />
        <FormComponent.FormInput
          type="password"
          name="password"
          label="Password..."
          register={register("password", { required: true, minLength: 8 })}
        />
        <FormComponent.SubmitButton>
          Sign Up
        </FormComponent.SubmitButton>
      </FormComponent>
      {!!registerError && <p>{registerError}</p>}
    </>
  );
}
