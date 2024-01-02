import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FloatHeader from "@/components/header/float";
import SectionFour from "@/components/homesection/SectionFour";

export default function Register() {

    return (
        <>
            <Head>
                <title>Register | Passport</title>
            </Head>

            <Header />
            <FloatHeader />

            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.section}>
                        <div className={styles.section__header}>
                            <h1 className={styles.section__title}>Passport Registration</h1>
                        
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}

