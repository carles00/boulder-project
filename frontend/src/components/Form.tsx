//import { UseFormRegisterReturn } from "react-hook-form";
import { FormEventHandler, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  method: "get" | "post";
  onSubmit: FormEventHandler;
}

export default function FormComponent({
  children,
  method,
  onSubmit,
}: FormProps) {
  return (
    <form
      className="form-component"
      method={method}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
    </form>
  );
}

interface FormInputProps {
  type: "text" | "password" | "email";
  label: string;
  name: string;
}

FormComponent.FormInput = function FormInput({
  type,
  label,
  name
}: FormInputProps) {
  return (
    <div className="form-group">
      <input
        className="form-input"
        placeholder="placeholder"
        type={type}
      />
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

interface SubmitButtonProps {
  children: ReactNode;
}

FormComponent.SubmitButton = function SubmitButton({
  children,
}: SubmitButtonProps) {
  return (
    <button className="form-button" type="submit">
      {children}
    </button>
  );
};
