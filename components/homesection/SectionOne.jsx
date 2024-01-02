import Head from "next/head";
import { React } from "react";
import style from "@/styles/Home.module.css";

export default function SectionOne() {
  return (
    <>
      <section className={`${style.sectionOne}`}>
        <div className={`${style.animation_corner}`}>
          <img src="/banner.png" />
        </div>
        <div className={`${style.text_corner}`}>
          <h1>
            Welcome To The <br /> Department of Foreign Affairs
          </h1>
          <p>
            Embark on a virtual journey with Department of Foreign Affairs.
            Let's explore, connect, and build a global community together.
          </p>

          <div className={`${style.button_container}`}>
            <a href="/contact">Contact Us</a>
            <a className={`${style.specialButton}`} href="/passport">
              Apply For Passport
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
