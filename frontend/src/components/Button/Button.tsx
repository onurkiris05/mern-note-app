import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  label?: string;
  className?: string;
  [key: string]: any;
}

function Button({ onClick, icon, label, className, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
      {icon && <i className={icon}></i>} {label}
    </button>
  );
}

export default Button;
