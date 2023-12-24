import React from "react";
import Image from "next/image";
import styles from "./SectionMain.module.scss";
import titleImg from "@/public/INCHAPIN.svg";
import mainImg1920 from "@/public/main_img-1920.jpg";
import mainImg1440 from "@/public/main_img-1440.jpg";
import mainImg1024 from "@/public/main_img-1024.jpg";
import mainImg768 from "@/public/main_img-768.jpg";
import mainImg360 from "@/public/main_img-360.jpg";

const Main = () => {
  return (
    <section className={styles.sectionMain}>
      <div className="container">
        <div className={styles.imgContainer}>
          <div className={`${styles.mainImage} ${styles.imgBigDesk}`}>
            <Image src={mainImg1920} alt="MainImg" />
          </div>
          <div className={`${styles.mainImage} ${styles.imgDesk}`}>
            <Image src={mainImg1440} alt="MainImg" />
          </div>
          <div className={`${styles.mainImage} ${styles.imglandscape}`}>
            <Image src={mainImg1024} alt="MainImg" />
          </div>
          <div className={`${styles.mainImage} ${styles.imgPortait}`}>
            <Image src={mainImg768} alt="MainImg" />
          </div>
          <div className={`${styles.mainImage} ${styles.imgPhone}`}>
            <Image src={mainImg360} alt="MainImg" />
          </div>
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle}>
            Дом бизнес-класса <br /> для ценителей роскоши
          </div>
          <div className={styles.title}>
            <h1>INCHAPIN</h1>
            <Image src={titleImg} alt="Picture of the author" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
