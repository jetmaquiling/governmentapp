import Head from "next/head";
import style from "@/styles/Home.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FloatHeader from "@/components/header/float";


let randomID = Math.floor(Math.random() * 100000);

import { useState, useEffect } from "react";

export default function Register() {
  const [registrationID, setRegistrationID] = useState("");

  useEffect(() => {
    // Set the registrationID upon startup
    setRegistrationID(`Registration ID: ${randomID}`);
  }, []);

  return (
    <>
      <Head>
        <title>Success | Passport</title>
      </Head>

      <main className={style.main}>
        <Header />
        <FloatHeader />
        <section id="values" className={`${style.sectionThree}`}>
          <h1 style={{ marginTop: "50px" }}>Application Processing...</h1>
          <p id="registrationID">{registrationID}</p>
          <p>
            Congratulations on applying for your passport at the Department of
            Foreign Affairs!
            <br /> To ensure a smooth process, follow these steps:
          </p>
          <div className={`${style.sectionThree_gallery}`}>
            <div className={`${style.image_corner}`}>
              <img src="/government.png" />
            </div>
            <div className={`${style.value_corner}`}>
              <h2>Prepare Documents</h2>
              <p>Bring necessary identification and citizenship proof.</p>
              <h2>Passport Photos</h2>{" "}
              <p>Provide recent passport-sized photos.</p>
              <h2>Payment</h2> <p>Be ready to pay processing fees.</p>
              <h2>Ask Questions</h2> <p>Seek assistance if needed.</p>
              <h2>Stay Informed</h2>{" "}
              <p>Check for updates on the official website.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
