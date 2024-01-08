import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FloatHeader from "@/components/header/float";
import SectionFour from "@/components/homesection/SectionFour";

export default function Passport() {
  const validateInputs = () => {
    let isValid = true;

    const firstNameInput = document.getElementById("firstName");
    const firstNameValue = firstNameInput.value.trim();
    const firstNameLabel = document.querySelector('label[for="firstName"]');

    const lastNameInput = document.getElementById("lastName");
    const lastNameValue = lastNameInput.value.trim();
    const lastNameLabel = document.querySelector('label[for="lastName"]');

    const middleNameInput = document.getElementById("middleName");
    const middleNameValue = middleNameInput.value.trim();
    const middleNameLabel = document.querySelector('label[for="middleName"]');

    const birthdateInput = document.getElementById("birthdate");
    const birthdateValue = birthdateInput.value.trim();
    const birthdateLabel = document.querySelector('label[for="birthdate"]');

    const addressInput = document.getElementById("address");
    const addressValue = addressInput.value.trim();
    const addressLabel = document.querySelector('label[for="address"]');

    const cityInput = document.getElementById("city");
    const cityValue = cityInput.value.trim();
    const cityLabel = document.querySelector('label[for="city"]');

    const provinceInput = document.getElementById("province");
    const provinceValue = provinceInput.value.trim();
    const provinceLabel = document.querySelector('label[for="province"]');

    const dfaOfficeInput = document.getElementById("dfaOffice");
    const dfaOfficeValue = dfaOfficeInput.value.trim();
    const dfaOfficeLabel = document.querySelector('label[for="dfaOffice"]');

    // Using regex to validate inputs
    const regex = /^[A-Z][a-zA-Z\s]*$/;

    // Validate First Name
    if (!firstNameValue) {
      firstNameLabel.innerHTML =
        "First Name <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else if (!regex.test(firstNameValue)) {
      firstNameLabel.innerHTML =
        "First Name <span style='color: red;'>*(Invalid Input)</span>";
      isValid = false;
    } else {
      firstNameLabel.innerHTML = "First Name";
    }

    // Validate Last Name
    if (!lastNameValue) {
      lastNameLabel.innerHTML =
        "Last Name <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else if (!regex.test(lastNameValue)) {
      lastNameLabel.innerHTML =
        "Last Name <span style='color: red;'>*(Invalid Input)</span>";
      isValid = false;
    } else {
      lastNameLabel.innerHTML = "Last Name";
    }

    // Validate Middle Name
    if (!middleNameValue) {
      middleNameLabel.innerHTML =
        "Middle Name <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else if (!regex.test(middleNameValue)) {
      middleNameLabel.innerHTML =
        "Middle Name <span style='color: red;'>*(Invalid Input)</span>";
      isValid = false;
    } else {
      middleNameLabel.innerHTML = "Middle Name";
    }

    // Validate Birthdate
    if (!birthdateValue) {
      birthdateLabel.innerHTML =
        "Birthdate <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else {
      birthdateLabel.innerHTML = "Birthdate";
    }

    // Validate Address
    if (!addressValue) {
      addressLabel.innerHTML =
        "Address <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } 
    // else if (!regex.test(addressValue)) {
    //   addressLabel.innerHTML =
    //     "Address <span style='color: red;'>*(Invalid Input)</span>";
    //   isValid = false;
    // } else {
    //   addressLabel.innerHTML = "Address";
    // }

    // Validate City
    if (!cityValue) {
      cityLabel.innerHTML = "City <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else if (!regex.test(cityValue)) {
      cityLabel.innerHTML =
        "City <span style='color: red;'>*(Invalid Input)</span>";
      isValid = false;
    } else {
      cityLabel.innerHTML = "City";
    }

    // Validate Province
    if (!provinceValue) {
      provinceLabel.innerHTML =
        "Province <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else if (!regex.test(provinceValue)) {
      provinceLabel.innerHTML =
        "Province <span style='color: red;'>*(Invalid Input)</span>";
      isValid = false;
    } else {
      provinceLabel.innerHTML = "Province";
    }

    // Validate DFA Office
    if (!dfaOfficeValue) {
      dfaOfficeLabel.innerHTML =
        "Branch <span style='color: red;'>*(Required)</span>";
      isValid = false;
    } else {
      dfaOfficeLabel.innerHTML = "Branch";
    }

    if (isValid) {
      if (window.confirm("Do you want to confirm the registration?")) {
        window.location.href = "/register";
      }
    }
  };

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
              <div style={{ width: "45%" }}>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Juan"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "45%" }}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Dela Cruz"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "45%" }}>
                <label htmlFor="middleName">Middle Name</label>
                <input
                  id="middleName"
                  placeholder="Mark"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "45%" }}>
                <label htmlFor="birthdate">Birthdate</label>
                <input id="birthdate" type="date" style={{ width: "100%" }} />
              </div>
            </div>

            <h2 style={{ marginTop: "50px" }}>Address</h2>

            <div>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                placeholder="Unit number, Street, village, barangay"
                style={{ width: "90%" }}
              />
              <div style={{ width: "45%" }}>
                <label htmlFor="city">City</label>
                <input id="city" placeholder="City" style={{ width: "100%" }} />
              </div>
              <div style={{ width: "45%" }}>
                <label htmlFor="province">Province</label>
                <input
                  id="province"
                  placeholder="Province"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <h2 style={{ marginTop: "50px" }}>DFA Office</h2>
            <div>
              <label htmlFor="dfaOffice">Branch</label>
              <select id="dfaOffice" style={{ width: "90%" }}>
                <option>DFA Manila (ASEANA)</option>
                <option>DFA NCR East (Megamall)</option>
                <option>DFA NCR North (Robinsons Novaliches)</option>
                <option>DFA NCR Northeast (Ali Mall Cubao)</option>
                <option>DFA NCR South (Alabang Town Center)</option>
                <option>DFA NCR West (SM City Manila)</option>
                <option>DFA Regional Consular Office – Angeles</option>
                <option>DFA Regional Consular Office – Antipolo</option>
                <option>DFA Regional Consular Office – Bacolod</option>
                <option>DFA Regional Consular Office – Baguio</option>
                <option>DFA Regional Consular Office – Butuan</option>
                <option>DFA Regional Consular Office – Cagayan De Oro</option>
                <option>DFA Regional Consular Office – Calasiao</option>
                <option>DFA Regional Consular Office – Cebu</option>
                <option>DFA Regional Consular Office – Clark</option>
                <option>DFA Regional Consular Office – Cotabato</option>
                <option>DFA Regional Consular Office – Davao</option>
                <option>DFA Regional Consular Office – Dipolog</option>
                <option>DFA Regional Consular Office – General Santos</option>
                <option>DFA Regional Consular Office – Iloilo</option>
                <option>DFA Regional Consular Office – La Union</option>
                <option>DFA Regional Consular Office – Legazpi</option>
                <option>DFA Regional Consular Office – Lipa</option>
                <option>DFA Regional Consular Office – Lucena</option>
                <option>DFA Regional Consular Office – Pampanga</option>
                <option>DFA Regional Consular Office – Puerto Princesa</option>
                <option>DFA Regional Consular Office – Santiago</option>
                <option>DFA Regional Consular Office – Tacloban</option>
                <option>DFA Regional Consular Office – Tuguegarao</option>
                <option>DFA Regional Consular Office – Zamboanga</option>
              </select>
            </div>
            <div style={{ marginTop: "50px" }}>
              <a href="/">Cancel</a>
              <a className={`${styles.specialButton}`} onClick={validateInputs}>
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
