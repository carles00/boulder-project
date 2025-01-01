import { SubmitHandler, useForm } from "react-hook-form";
import FormComponent from "../../../lib/components/Form";

interface IFormInput{
  email: string,
  address: string,
  name: string
}

export default function GymSignUp(){
  const {register, handleSubmit} = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {console.log(data)}

  return(
    <>
      <h3>Register your Gym</h3>
      <FormComponent method="post" onSubmit={handleSubmit(onSubmit)}>
        <FormComponent.FormInput 
          type="email"
          label="Contact email"
          name="email"
          register={register("email", {required: true})}
        />
        <FormComponent.FormInput 
          type="text"
          label="Name"
          name="name"
          register={register('name', {required: true})}
        />
        <FormComponent.FormInput 
          type="text"
          label="Gym address"
          name="address"
          register={register("address", {required: true})}
        />
        <FormComponent.SubmitButton>
          Sign Up
        </FormComponent.SubmitButton>
      </FormComponent>
    </>
  )
}