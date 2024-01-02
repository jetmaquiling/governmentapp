import Head from "next/head";
import Image from "next/image";

import styles from "./header.module.css";
import localFont from "next/font/local";

export default function Header() {
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
    </header>
  );
}
