import React from "react";
import styles from "./SectionAbout.module.scss";
import Image from "next/image";
import aboutImg from "@/public/aboutImg.jpg";
import EllipsElement from "../svgs/EllipsElement";
import Video from "../Widgets/Video/Video";
import videoImg from "@/public/video.png";

const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.contentImage}>
            <h2>о проекте</h2>
            <div className={styles.image}>
              <Image src={aboutImg} alt="Picture of the author" />
              <div className={styles.ellipsSvg}>
                <EllipsElement />
              </div>
            </div>
          </div>

          <div className={styles.contentText}>
            <div className={styles.mainText}>
              уютное и безопасное пространство для счастливой,
              <span>спокойной и размеренной жизни</span>
            </div>

            <div className={styles.secondText}>
              <span>Квартиры от 65 до 356 м2 с чистовой отделкой,</span>{" "}
              балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
              территориИ.
            </div>

            <Video
              title="ВИДЕО о ПРОЕКТЕ"
              time="1:25 минут"
              image={videoImg.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
