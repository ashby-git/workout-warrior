import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const Carousel = () => {
  return (
    <div className="flex flex-col bg-transparent m-auto p-auto w-9/12">
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap md ">
          <div className="inline-block px-3">
            <div
              className="w-64  max-w-xs overflow-hidden rounded-lg shadow-md bg-white 
            hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h1 className="font-bold text-5xl flex justify-center py-3">
                Week 1
              </h1>
              <p className="text-2xl flex justify-center hover:bg-gray-50 cursor-pointer">
                Session 1
              </p>
              <p className="text-2xl flex justify-center hover:bg-gray-50 cursor-pointer">
                Session 2
              </p>
              <p className="text-2xl flex justify-center hover:bg-gray-50 cursor-pointer">
                Session 3
              </p>
              <p className="text-2xl flex justify-center hover:bg-gray-50 cursor-pointer">
                Session 4
              </p>
              <p className="text-2xl flex justify-center hover:bg-gray-50 cursor-pointer">
                Session 5
              </p>

              <div className="h-7 pb-1 flex justify-center hover:bg-gray-50 cursor-pointer">
                <PlusIcon />
              </div>
              <div></div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div
              className="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white 
            hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center h-full hover:bg-gray-50 cursor-pointer">
                <div className="h-8 flex ">
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white 
            hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center h-full hover:bg-gray-50 cursor-pointer">
                <div className="h-8 flex ">
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white 
            hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center h-full hover:bg-gray-50 cursor-pointer">
                <div className="h-8 flex ">
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white 
            hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center h-full hover:bg-gray-50 cursor-pointer">
                <div className="h-8 flex ">
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white 
            hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center h-full hover:bg-gray-50 cursor-pointer">
                <div className="h-8 flex ">
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
