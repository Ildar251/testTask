import React, { useState, FormEvent, useRef } from "react";
import styles from "./Form.module.scss";
import Input from "../Widgets/UI/Input/Input";
import Button from "../Widgets/UI/Button/Button";
import Link from "next/link";
import { useForm } from 'react-hook-form';

const Form = () => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm();


    const onSubmit = (data: any) => {
       console.log(data)
    };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id='InputName'
        label="Ваше имя"
        type="text"
        register={register}
      />

      <Input
        id='InputTel'
        label="Телефон"
        type="phone"
        register={register}
        required={true}
      />

      <Input
        id='InputEmail'
        label="E-mail"
        type="email"
        register={register}
      />

      <div className={styles.policy}>
        Нажимая на кнопку «Отправить», вы ознакомлены <br />и подтверждаете
        согласие с{" "}
        <Link href="/home">политикой обработки персональных данных</Link>
      </div>
      <Button type="submit" className={styles.formButton}>ОТПРАВИТЬ</Button>
    </form>
  );
};

export default Form;
