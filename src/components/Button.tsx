import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick?: VoidFunction;
}

export const Button = ({ children, onClick }: IProps) => (
  <button
    onClick={onClick}
    className="px-2 py-1 border rounded-md border-gray-500 text-white bg-slate-500"
  >
    {children}
  </button>
);
