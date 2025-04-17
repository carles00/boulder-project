import { ReactNode } from "react";
import Button from "./Button";
import clsx from "clsx";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface FormProps {
  children: ReactNode;
  action: (payload: FormData) => void;
}

export default function FormComponent({ children, action }: FormProps) {
  return (
    <form
      action={action}
      className="flex h-full w-full flex-col items-center justify-center gap-2.5"
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

  errorMessage?: string;
}

FormComponent.FormInput = function FormInput({
  type,
  label,
  name,
  errorMessage,
}: FormInputProps) {
  const classString = clsx(
    `peer/input h-14 rounded-sm border-0 border-l-6 bg-stone-100 p-2.5 text-xl shadow-sm transition-all duration-150 ease-in-out placeholder:opacity-0 hover:border-l-lime-600 hover:bg-stone-200 focus-visible:border-l-lime-600 focus-visible:bg-stone-200 focus-visible:outline-stone-800`,
    {
      "border-l-stone-100": !errorMessage,
      "border-l-red-600 hover:border-l-red-600 focus-visible:border-l-red-600":
        errorMessage,
    },
  );

  return (
    <div className="relative flex w-full flex-col">
      <input
        className={classString}
        placeholder="placeholder"
        type={type}
        name={name}
        required
      />
      <label
        className="pointer-events-none absolute top-4 left-3.5 transition-all duration-150 ease-in-out peer-[:not(:placeholder-shown)]:opacity-40 peer-[:not(:placeholder-shown)]/input:-translate-y-4"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

interface SubmitButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

FormComponent.SubmitButton = function SubmitButton({
  children
}: SubmitButtonProps) {
  return (
    <Button type="submit" buttonType="primary">
      {children}
    </Button>
  );
};

interface FormErrorProps {
  message: string
}

FormComponent.FormError = function FormError({message}: FormErrorProps){
  return(
    <div>
      {message}
    </div>
  )
};
