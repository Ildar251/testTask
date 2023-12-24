import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import InputMask from "react-input-mask";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  register: any;
  required: boolean;
  label: string;
  className?: string;
}

const Input = ({
  id,
  name,
  register,
  required,
  label,
  ...props
}: inputProps) => {
  return props.type == "phone" ? (
    <div className={styles.formItem}>
      <InputMask
        {...props}
        {...register(id, {
          required: required,
        })}
        mask="+7 (999) 999-99-99"
        placeholder=""
      />
      <label className={styles.label}>{label}</label>
    </div>
  ) : (
    <div className={styles.formItem}>
      <input
        {...props}
        {...register(id)}
        placeholder=""
        className={styles.input}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Input;
