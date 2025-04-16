import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center p-3 bg-lime-600 rounded-sm`}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
}
