import React from "react";
import classnames from "classnames";

import './Button.css';

type ButtonProps = {
  type: "primary" | "text",
}

const Button: React.FC<ButtonProps> = ({children, type = "text"}) => {
  const buttonClasses = classnames([
    "button",
    {"primary": type === "primary"},
    {"text": type === "text"},
  ]);

  return <button className={buttonClasses}>{children}</button>
}

export { Button }

