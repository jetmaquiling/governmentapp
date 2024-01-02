import Head from "next/head";
import Image from "next/image";

import styles from "./style.module.css";

export default function Loading() {
  return (
    <div className={`${styles.loader_main}`}>
      <img src="/loader.svg" />
    </div>
  );
}
