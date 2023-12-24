import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import Number from "../Widgets/Number/Number";
import logo from "@/public/logo.svg";
import Button from "../Widgets/UI/Button/Button";
import Call from "../Widgets/Call/Call";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Navigation />

        <Button arrowDown>Выбрать квартиру</Button>

        <div className={styles.logo}>
          <Image src={logo} alt="Picture of the author" />
        </div>

        <Number />

        <Call>ЗАКАЗАТЬ ЗВОНОК</Call>
      </div>
    </header>
  );
};

export default Header;
