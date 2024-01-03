import Head from "next/head";
import { React } from "react";

import style from "@/styles/Home.module.css";

export default function SectionFour() {
  return (
    <>
      <section id="aboutus" className={`${style.sectionThree}`}>
        <div className={`${style.sectionThree_gallery}`}>
          <div className={`${style.contact_image}`} style={{ width: "50%" }}>
            <img style={{ width: "100%" }} src="/contact.jpg" />
          </div>
          <div
            className={`${style.contact_side}`}
            style={{ width: "50%", padding: "30px", textAlign: "left" }}
          >
            <h4>Contact Us</h4>
            <p>
              As a representative of the Department of Foreign Affairs, please
              feel free to reach out to us at any time. We want to assure you
              that you have our full support, and we are here to assist you with
              any inquiries or concerns you may have. Your communication is
              valuable to us, and we stand ready to provide the necessary
              assistance.
            </p>
            <div className={`${style.button_container}`}>
              <a href="tel:123-456-7890">+092323892332</a>
              <a
                href="mailto: abc@example.com"
                className={`${style.specialButton}`}
              >
                customer_service@dfa_office.gov
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
