import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

function Button({ onClick, className, children, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
