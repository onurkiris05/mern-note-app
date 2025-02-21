import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

function Button({ onClick, icon, label, className, disabled }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} disabled={disabled}>
      {icon && <i className={icon}></i>} {label}
    </button>
  );
}

export default Button;
