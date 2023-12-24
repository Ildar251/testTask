import React from "react";
import styles from "./Number.module.scss";
import Link from "next/link";
import cn from "classnames";

interface numberProps {
  className?: string;
}

const Number = ({ className }: numberProps) => {
  return (
    <div className={cn(styles.number, className)}>
      <Link href="tel:+74955272121">+7 495 527 21 21</Link>
    </div>
  );
};

export default Number;
