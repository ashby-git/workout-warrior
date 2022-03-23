import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Workout Warrior</title>
        <meta
          name="description"
          content="A workout tracker, for all your exercise needs!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative bg-gray-100 pt-6 lg:pt-10 pb-16 min-h-screen">
        <main></main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
