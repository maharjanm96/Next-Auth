import Link from "next/link";
import React from "react";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="w-full p-2 bg-black text-white rounded-lg border-2 hover:border-blue-700 hover:bg-blue-700 hover:text-white">
      {name}
    </button>
  );
};

export default Button;
