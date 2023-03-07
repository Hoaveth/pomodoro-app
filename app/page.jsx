"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import About from "./components/About";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [stage, setStage] = useState(0);
  const [countDown, setCountDown] = useState(60 * pomodoro);
  const [runTimer, setRunTimer] = useState(false);

  useEffect(() => {
    let timer;
    const selectedStage = setTimer(stage);
    if (runTimer) {
      setCountDown(60 * selectedStage);
      timer = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [runTimer]);

  // useEffect(() => {
  //   if (countDown < 0 && runTimer) {
  //     setRunTimer(false);
  //     setCountDown(0);
  //   }
  // }, [countDown, runTimer]);

  const switchStage = (index) => {
    setRunTimer(false);
    setStage(index);
    setCountDown(60 * setTimer(index));
  };

  const setTimer = (index) => {
    let selectedStage =
      index === 0 ? pomodoro : index === 1 ? shortBreak : longBreak;
    return selectedStage;
  };

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  const toggleTimer = () => setRunTimer((t) => !t);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-4xl min-h-screen mx-auto">
        <Navbar />
        <Timer
          stage={stage}
          switchStage={switchStage}
          countDown={countDown}
          toggleTimer={toggleTimer}
          seconds={seconds}
          minutes={minutes}
          runTimer={runTimer}
        />
        <About />
      </div>
    </div>
  );
}
