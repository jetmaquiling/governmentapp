import Head from "next/head";
import { React } from "react";
import style from "@/styles/Home.module.css";

import { useState } from "react";

export default function SectionTwo() {
  return (
    <>
      <section id="services" className={`${style.sectionTwo}`}>
        <h2>Our Services</h2>
        <div className={`${style.sectionTwo_gallery}`}>
          <div className={`${style.sectionTwo_item}`}>
            <img src="/image1.jpg" />
            <h4>Your Passport to Diplomacy</h4>
            <p>
              Discover the world of international relations. Learn about how our
              diplomats work to build friendships and represent our nation's
              interests globally.
            </p>
            <a href="/register" className={`${style.specialButton}`}>
              Learn More
            </a>
          </div>

          <div className={`${style.sectionTwo_item}`}>
            <img src="/image1.jpg" />
            <h4>Consular Services Made Easy</h4>
            <p>
              Planning a trip or living abroad? Find simple guides to passports,
              visas, and support services. We've got your back, wherever you
              are.
            </p>
            <a href="/register" className={`${style.specialButton}`}>
              Learn More
            </a>
          </div>

          <div className={`${style.sectionTwo_item}`}>
            <img src="/image1.jpg" />
            <h4>Global Impact, Local Connection</h4>
            <p>
              Explore our involvement in global initiatives, from tackling
              climate change to promoting human rights. See how we're making a
              positive impact worldwide.
            </p>
            <a href="/register" className={`${style.specialButton}`}>
              Learn More
            </a>
          </div>

          <div className={`${style.sectionTwo_item}`}>
            <img src="/image1.jpg" />
            <h4>Crisis Support at Your Fingertips</h4>
            <p>
              In times of need, we're here for you. Learn about our crisis
              management strategies and how we collaborate with others to ensure
              your safety
            </p>
            <a href="/register" className={`${style.specialButton}`}>
              Learn More
            </a>
          </div>

          <div className={`${style.sectionTwo_item}`}>
            <img src="/image1.jpg" />
            <h4>User-Friendly Experience</h4>
            <p>
              Navigate easily, find what you need, and stay updated on foreign
              affairs, whether you're a seasoned traveler or new to
              international relations.
            </p>
            <a href="/register" className={`${style.specialButton}`}>
              Learn More
            </a>
          </div>

          <div className={`${style.sectionTwo_item}`}>
            <img src="/image1.jpg" />
            <h4>Connect with Us</h4>
            <p>
              Join us on our website and social media. Stay informed, share your
              thoughts, and be part of our online community. Your feedback
              matters.
            </p>
            <a href="/register" className={`${style.specialButton}`}>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
