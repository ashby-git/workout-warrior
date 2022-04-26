import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timeArray, setTimeArray] = useState<Array<number | string>>([]);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [disableStart, setDisableStart] = useState(false);
  const [disableStop, setDisableStop] = useState(false);

  useEffect(() => {
    setTimeArray(calculateTimeInSeconds(timeInSeconds));
  }, [timeInSeconds]);

  const handleStartButton = (e: object) => {
    const interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);

    setIntervalId(interval);
    setDisableStart(true);
    setDisableStop(false);
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

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden ">
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div className="w-full flex justify-center py-5 px-6 text-6xl md:text-8xl text-white font-thin font-mono">
            <p id="hour">{timeArray[0]}</p>
            <span>:</span>
            <p id="minute">{timeArray[1]}</p>
            <span>:</span>
            <p id="second">{timeArray[2]}</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
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
  );
};

export default Stopwatch;
