import Head from "next/head";
import Image from "next/image";

import styles from "./style.module.css";

export default function Mobile() {
  return (
    <div className={`${styles.mobile_main}`}>
      <p>
        Dear User, you are currently in a mobile screen therefore you cannot
        access the site. Please use a desktop screen to continue.
      </p>
    </div>
  );
}
