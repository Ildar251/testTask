"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Video.module.scss";
import { StaticImageData } from "next/image";

interface videoProps {
  title?: string;
  time?: string;
  image: string | StaticImageData;
}

const Video = ({ title, time, image }: videoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "block";
      videoRef.current.currentTime = 0;
      videoRef.current.play();

      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      }
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.style.display = "none";
      }
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className={styles.videoItem}>
      {title ? (
        <>
          <div className={styles.videoInfo}>
            <div className={styles.videoText}>{title}</div>
            <div className={styles.videoTime}>{time}</div>
          </div>

          <div className={styles.line} />
        </>
      ) : null}

      <div
        className={styles.video}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.play} onClick={handlePlayButtonClick}>
          <div className={styles.icon}></div>
          <span>play</span>
        </div>
      </div>

      <video ref={videoRef} controls className={styles.videoPlayer}>
        <source src="/sample-5s.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
