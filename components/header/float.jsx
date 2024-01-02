import Head from "next/head";
import Image from "next/image";

import styles from "./float.module.css";

import { useEffect, useState } from "react";

export default function FloatHeader() {
  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  return (
    <header
      className={`${pos === "top" ? styles.mainNot : ""}  ${styles.main}`}
    >
      <a href="/">
        <img src={"/" + "logo-header.png"} />
      </a>
      <div>
        <a href="/contact">Contact Us</a>
        <a href="/#values">Our Values</a>
        <a href="/#services">Services</a>
        <a className={`${styles.specialButton}`} href="/passport">
          Apply For Passport
        </a>
      </div>
    </header>
  );
}
