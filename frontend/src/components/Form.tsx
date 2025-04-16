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
      className="flex flex-col h-full w-full gap-2.5 items-center justify-center"
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
  name,
}: FormInputProps) {
  return (
    <div className="relative flex w-full flex-col">
      <input
        className="peer h-14 border-0 border-l-4 border-l-stone-600 bg-stone-100 p-2.5 text-xl transition-all duration-150 ease-in-out placeholder:opacity-0 hover:border-l-lime-600 hover:bg-stone-200 focus-visible:border-l-lime-600 focus-visible:bg-stone-200"
        placeholder="placeholder"
        type={type}
      />
      <label
        className="pointer-events-none absolute top-4 left-3.5 transition-all duration-150 ease-in-out peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:opacity-40 "
        htmlFor={name}
      >
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
