import React from "react";
import "./Button.css";

const Button = ({ title, altTitle, link }: ButtonProps) => {
  return (
    <div className="button flex-center">
      <button className="">{title}</button>
    </div>
  );
};

export default Button;
