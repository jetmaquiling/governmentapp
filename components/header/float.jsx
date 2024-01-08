import Head from "next/head";
import Image from "next/image";

import styles from "./float.module.css";

import { useEffect, useState } from "react";

export default function FloatHeader() {
  const [pos, setPos] = useState("top");
  const [open, setOpen] = useState(false);
  

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

      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className={`${styles.menu}`} src={"/" + "menu.svg"} />
      </button>

      <section className={`${open ? styles.open : ""}`}>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img className={`${styles.menu}`} src={"/" + "cancel.svg"} />
        </button>
        <a style={{ marginBottom: "20px" }} href="/">
          <img src={"/" + "logo-header.png"} />
        </a>
        <a
          style={{ marginBottom: "20px" }}
          className={`${styles.specialButton}`}
          href="/passport"
        >
          Apply For Passport
        </a>
        <a style={{ marginBottom: "20px" }} onClick={() => setOpen(false)} href="/contact">
          Contact Us
        </a>
        <a style={{ marginBottom: "20px" }} onClick={() => setOpen(false)} href="/#values">
          Our Values
        </a>
        <a href="/#services" onClick={() => setOpen(false)}>Services</a>
      </section>
    </header>
  );
}
