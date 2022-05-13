import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel/carousel";
import Table from "../components/table/table";
import ExerciseInfoModal from "../components/exercise-info-modal/exercise-info-modal";
import TestForm from "../components/exercise-info-modal/test-form";
import Stopwatch from "../components/stopwatch/stopwatch";
import Timer from "../components/timer/timer";
import SlideOverPanel from "../components/slide-over-panel/slide-over-panel";
import { useState } from "react";
import { Button } from "../components/button/button";

const Home: NextPage = () => {
  const [openSlideOverPanel, setOpenSlideOverPanel] = useState(false);
  const [slideOverPanelTitle, setSlideOverPanelTitle] = useState("");
  const [slideOverPanelChild, setSlideOverPanelChild] = useState(<></>);

  const toggle = () => {
    setOpenSlideOverPanel(!openSlideOverPanel);
  };

  const stopwatchHandler = () => {
    toggle();
    setSlideOverPanelChild(<Stopwatch />);
    setSlideOverPanelTitle("Stopwatch:");
  };

  const timerHandler = () => {
    toggle();
    setSlideOverPanelChild(<Timer />);
    setSlideOverPanelTitle("Timer:");
  };

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
        <main>
          <Carousel />
          <div className="py-10 max-w-max mx-auto">
            <Table />
            <ExerciseInfoModal />
            <TestForm />
            <div className="flex justify-around my-6">
              <Button onClick={stopwatchHandler}>Stopwatch</Button>
              <Button onClick={timerHandler}>Timer</Button>
            </div>
            <SlideOverPanel
              title={slideOverPanelTitle}
              open={openSlideOverPanel}
              toggle={toggle}
            >
              {slideOverPanelChild}
            </SlideOverPanel>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
