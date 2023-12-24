import React from "react";
import styles from "./Navigation.module.scss";
import Number from "../../Widgets/Number/Number";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuContainer}>
        <input className={styles.checkbox} type="checkbox" name="" id="" />
        <p className={styles.menuText}>Меню</p>
        <div className={styles.menuLines}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.menuItems}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/home">Contacts</Link>
          </li>

          <Number className={styles.number} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
