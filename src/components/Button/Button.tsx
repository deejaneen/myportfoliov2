import React from "react";
import "./Button.css";

const Button = ({ title, altTitle, link }: ButtonProps) => {
  return (
    <div className="button flex-center">
      <a href={link} download>{title}</a>
    </div>
  );
};

export default Button;
