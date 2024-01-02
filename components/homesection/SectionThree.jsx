import Head from "next/head";
import { React } from "react";
import style from "@/styles/Home.module.css";

export default function SectionThree() {
  return (
    <>
      <section id="values" className={`${style.sectionThree}`}>
        <h4>Our Values</h4>
        <div className={`${style.sectionThree_gallery}`}>
          <div className={`${style.image_corner}`}>
            <img src="/government.png" />
          </div>
          <div className={`${style.value_corner}`}>
            <h3>Integrity</h3>
            <p>We're honest and clear in all we do.</p>
            <h3>Service</h3>
            <p>We're here to serve you, both at home and wherever you go.</p>
            <h3>Diversity and Inclusion</h3>
            <p>Everyone is important, and we celebrate our differences.</p>
            <h3>Innovation</h3>
            <p>We adapt to make the world a better place. </p>
          </div>
        </div>
      </section>
    </>
  );
}
