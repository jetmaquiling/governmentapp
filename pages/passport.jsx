import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FloatHeader from "@/components/header/float";
import SectionFour from "@/components/homesection/SectionFour";

export default function Passport() {
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
        <section className={`${styles.sectionPassport}`}>
          <h1 style={{ marginTop: "20px" }}>Passport Application</h1>
          <form>
            <h2 style={{ marginTop: "50px" }}>Personal Information</h2>
            <div>
              <input placeholder="First Name" style={{ width: "45%" }} />
              <input placeholder="Last Name" style={{ width: "45%" }} />
              <input placeholder="Middle Name" style={{ width: "45%" }} />
              <input placeholder="Birthdate" style={{ width: "45%" }} />
            </div>

            <h2 style={{ marginTop: "50px" }}>Address</h2>

            <div>
              <input
                placeholder="Unit number, Street, village, barangay
"
                style={{ width: "90%" }}
              />
              <input placeholder="City" style={{ width: "45%" }} />
              <input placeholder="Province" style={{ width: "45%" }} />
            </div>

            <h2 style={{ marginTop: "50px" }}>DFA Office Appointment</h2>
            <div>
              <input
                placeholder="Department of Foreign Affairs San Fernando City"
                style={{ width: "90%" }}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <a href="/">Cancel</a>
              <a href="/register" className={`${styles.specialButton}`}>
                Proceed To Application
              </a>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
