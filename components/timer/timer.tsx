import React from "react";

const Timer = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden ">
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div className="w-full flex justify-center py-5 px-6 text-6xl md:text-8xl text-white font-thin font-mono">
            <p id="hour">00</p>
            <span>:</span>
            <p id="minute">00</p>
            <span>:</span>
            <p id="second">00</p>
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
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                +1
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                -1
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                +1
              </button>
            </div>

            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                -1
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                +1
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                -1
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                +10
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                -10
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                +10
              </button>
            </div>

            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                -10
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                +10
              </button>
            </div>
            <div className="w-1/6 border-r border-b border-indigo-400">
              <button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                -10
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/3 border-r border-b border-indigo-400">
              <button
                type="button"
                // disabled={disableStart}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                // onClick={handleStartButton}
              >
                START
              </button>
            </div>
            <div className="w-1/3 border-r border-b border-indigo-400">
              <button
                type="button"
                // disabled={disableStop}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                // onClick={handleStopButton}
              >
                STOP
              </button>
            </div>
            <div className="w-1/3 border-r border-b border-indigo-400">
              <button
                type="button"
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                // onClick={handleReset}
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

export default Timer;
