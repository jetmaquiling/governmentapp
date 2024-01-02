import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SectionOne from "@/components/homesection/SectionOne";
import SectionTwo from "@/components/homesection/SectionTwo";
import SectionThree from "@/components/homesection/SectionThree";
import FloatHeader from "@/components/header/float";

export default function Home() {
  return (
    <>
      <Head>
        <title>Department Of Foreign Affairs</title>
        <meta name="description" content="Department of Foreign Affairs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <Header />
        <FloatHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </>
  );
}
