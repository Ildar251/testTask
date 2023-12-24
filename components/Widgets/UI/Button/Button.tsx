import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  arrowDown?: boolean;
}

const Button = ({ children, className, arrowDown, ...props }: buttonProps) => {
  return (
    <button
      {...props}
      className={`${styles.button}  ${
        arrowDown ? styles.arrowDown : null
      } ${className} `}
    >
      <div className={styles.spanContainer}>
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
