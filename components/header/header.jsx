import Head from "next/head";
import Image from "next/image";

import styles from "./header.module.css";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(true);
  return (
    <header className={`${styles.main}`}>
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
        <a style={{ marginBottom: "20px" }} href="/contact">
          Contact Us
        </a>
        <a style={{ marginBottom: "20px" }} href="/#values">
          Our Values
        </a>
        <a href="/#services">Services</a>
      </section>
    </header>
  );
}
