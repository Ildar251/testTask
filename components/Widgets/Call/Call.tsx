"use client";

import React, { ReactNode, useRef, useState } from "react";
import styles from "./Call.module.scss";
import Modal from "../modal/Modal";
import { CSSTransition } from "react-transition-group";

interface callProps {
  children: ReactNode;
}

const Call = ({ children }: callProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nodeRef = useRef();

  const modalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const modalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className={styles.call} onClick={modalOpen}>
        <div className={styles.spanContainer}>
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </div>

      <CSSTransition
        nodeRef={nodeRef}
        in={isModalOpen}
        timeout={400}
        classNames="my-node"
        unmountOnExit
      >
        <Modal nodeRef={nodeRef} onClose={modalClose} />
      </CSSTransition>
    </>
  );
};

export default Call;
