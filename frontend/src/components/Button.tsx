import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  buttonType: "danger" | "primary" | "white";
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  buttonType,
  type = "button",
  onClick,
}: ButtonProps) {
  const buttonStyles = clsx(
    " flex items-center justify-center rounded-lg shadow-sm py-2 px-3 transition-colors duration-150 ease-in-out cursor-pointer",
    {
      "bg-red-600 text-white hover:bg-red-700": buttonType === "danger",
      "bg-lime-600 text-white hover:bg-lime-700": buttonType === "primary",
      "bg-white text-black border border-gray-300 hover:bg-stone-200":
        buttonType === "white",
    },
  );

  return (
    <button
      className={buttonStyles}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
}
