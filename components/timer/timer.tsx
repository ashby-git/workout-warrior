import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timeArray, setTimeArray] = useState<Array<number | string>>([]);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [disableStart, setDisableStart] = useState(false);
  const [disableStop, setDisableStop] = useState(false);
  const [inputTime, setInputTime] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);

  useEffect(() => {
    setTimeArray(calculateTimeInSeconds(timeInSeconds));
  }, [timeInSeconds]);

  const bgChange =
    disableStart && inputTime
      ? "bg-gradient-to-b from-gray-800 to-indigo-900"
      : "bg-gradient-to-b from-gray-800 to-gray-700";

  const addOneSecond = () => {
    setTimeInSeconds((previousState: number) => previousState + 1);
    setInputTime(true);
  };
  const minusOneSecond = () => {
    if (timeInSeconds > 0) {
      setTimeInSeconds((previousState: number) => previousState - 1);
      setInputTime(true);
    }
  };
  const addTenSeconds = () => {
    setTimeInSeconds((previousState: number) => previousState + 10);
    setInputTime(true);
  };
  const minusTenSeconds = () => {
    if (timeInSeconds >= 10) {
      setTimeInSeconds((previousState: number) => previousState - 10);
      setInputTime(true);
    }
  };
  const addOneMinute = () => {
    setTimeInSeconds((previousState: number) => previousState + 60);
    setInputTime(true);
  };
  const addTenMinutes = () => {
    setTimeInSeconds((previousState: number) => previousState + 600);
    setInputTime(true);
  };
  const minusOneMinute = () => {
    if (timeInSeconds >= 60) {
      setTimeInSeconds((previousState: number) => previousState - 60);
      setInputTime(true);
    }
  };
  const minusTenMinutes = () => {
    if (timeInSeconds >= 600) {
      setTimeInSeconds((previousState: number) => previousState - 600);
      setInputTime(true);
    }
  };
  const addOneHour = () => {
    setTimeInSeconds((previousState: number) => previousState + 3600);
    setInputTime(true);
  };
  const addTenHours = () => {
    setTimeInSeconds((previousState: number) => previousState + 36000);
    setInputTime(true);
  };
  const minusOneHour = () => {
    if (timeInSeconds >= 3600) {
      setTimeInSeconds((previousState: number) => previousState - 3600);
      setInputTime(true);
    }
  };
  const minusTenHours = () => {
    if (timeInSeconds >= 36000) {
      setTimeInSeconds((previousState: number) => previousState - 36000);
      setInputTime(true);
    }
  };

  const handleStartButton = (e: object) => {
    if (inputTime) {
      const interval: any = setInterval(() => {
        setTimeInSeconds((previousState: number) => previousState - 1);
      }, 1000);

      setIntervalId(interval);
      setDisableStart(true);
      setDisableStop(false);
    }
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
    setDisableStop(true);
    setDisableStart(false);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
    setDisableStop(false);
    setDisableStart(false);
    setInputTime(false);
  };

  function calculateTimeInSeconds(timeInSeconds: number): (number | string)[] {
    let hours: number = Math.floor(timeInSeconds / 3600);
    let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
    let seconds: number = timeInSeconds - hours * 3600 - minutes * 60;

    return [
      hours < 10 ? `0${hours}` : hours,
      minutes < 10 ? `0${minutes}` : minutes,
      seconds < 10 ? `0${seconds}` : seconds,
    ];
  }

  if (timeInSeconds == 0 && disableStart && inputTime) {
    handleReset();
    setTimerEnd(true);
    setTimeout(() => setTimerEnd(false), 4000);
  }

  return (
    <>
      <div className="min-w-full min-h-full flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden ">
          <div className={`${bgChange} w-full h-40 flex items-end text-right`}>
            <div className="w-full flex justify-center py-5 px-6 text-6xl md:text-8xl text-white font-thin font-mono">
              <p id="hour">{timeArray[0]}</p>
              <span>:</span>
              <p id="minute">{timeArray[1]}</p>
              <span>:</span>
              <p id="second">{timeArray[2]}</p>
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-600">
            <div className="flex w-full">
              <div className="w-1/3 border-r border-b border-indigo-400">
                <div className="flex justify-center items-center w-full h-10 outline-none text-white text-xl font-light">
                  Hours
                </div>
              </div>
              <div className="w-1/3 border-r border-b border-indigo-400">
                <div className="flex justify-center items-center w-full h-10 outline-none text-white text-xl font-light">
                  Minutes
                </div>
              </div>
              <div className="w-1/3 border-r border-b border-indigo-400">
                <div className="flex justify-center items-center w-full h-10 outline-none text-white text-xl font-light">
                  Seconds
                </div>
              </div>
            </div>
            <div className="flex w-full"></div>

            <div className="flex w-full">
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={addOneHour}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +1
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={minusOneHour}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -1
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={addOneMinute}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +1
                </button>
              </div>

              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={minusOneMinute}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -1
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={addOneSecond}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +1
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={minusOneSecond}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -1
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={addTenHours}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +10
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={minusTenHours}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -10
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={addTenMinutes}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +10
                </button>
              </div>

              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={minusTenMinutes}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -10
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={addTenSeconds}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +10
                </button>
              </div>
              <div className="w-1/6 border-r border-b border-indigo-400">
                <button
                  disabled={disableStart}
                  onClick={minusTenSeconds}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -10
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/3 border-r border-b border-indigo-400">
                <button
                  type="button"
                  disabled={disableStart}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                  onClick={handleStartButton}
                >
                  START
                </button>
              </div>
              <div className="w-1/3 border-r border-b border-indigo-400">
                <button
                  type="button"
                  disabled={disableStop}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                  onClick={handleStopButton}
                >
                  STOP
                </button>
              </div>
              <div className="w-1/3 border-r border-b border-indigo-400">
                <button
                  type="button"
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                  onClick={handleReset}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {timerEnd ? <audio src="/alarm.mp3" autoPlay /> : null}
    </>
  );
};

export default Timer;
