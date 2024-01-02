import Head from "next/head";
import Image from "next/image";

import styles from "./footer.module.css";
import localFont from "next/font/local";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export default function Footer() {
  return (
    <footer className={`${styles.main}  ${poppins.className}`}>
      <img src={"/" + "logo-footer.png"} />
      <span>
        ©2024 Copyright DFA Project of STI COLLEGE TAGAYATAY. All rights
        reserved
      </span>
    </footer>
  );
}
