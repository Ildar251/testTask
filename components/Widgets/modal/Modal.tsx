"use client";

import React, { RefObject, useEffect } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";
import Form from "@/components/Form/Form";

interface modalProps {
  onClose: () => void;
  nodeRef?: RefObject<HTMLDivElement>;
}

const Modal = ({ onClose, nodeRef }: modalProps) => {
  const modalSection = document.getElementById("modals");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!modalSection) return;

  return ReactDOM.createPortal(
    <div ref={nodeRef}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>ЗАКАЗАТЬ ЗВОНОК</div>
        <Form />
        <div className={styles.closeIcon} onClick={onClose}></div>
      </div>

      <div className={styles.overlay} onClick={onClose}></div>
    </div>,
    modalSection
  );
};

export default Modal;
