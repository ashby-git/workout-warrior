import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const Table = () => {
  return (
    <>
      <h1 className="flex justify-center font-bold text-2xl">Week 1</h1>
      <h3 className="py-3 flex justify-center font-semibold text-xl">
        Session 1
      </h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Day
              </th>
              <th scope="col" className="px-6 py-3">
                Letter
              </th>
              <th scope="col" className="px-6 py-3">
                Exercise
              </th>
              <th scope="col" className="px-6 py-3">
                Intensity
              </th>
              <th scope="col" className="px-6 py-3">
                Sets
              </th>
              <th scope="col" className="px-6 py-3">
                Reps
              </th>
              <th scope="col" className="px-6 py-3">
                Rest
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">Pull1</td>
              <td className="px-6 py-4">A1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Weighted Chinups
              </th>
              <td className="px-6 py-4">30kg</td>
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">5</td>
              <td className="px-6 py-4">5min</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">Pull1</td>
              <td className="px-6 py-4">B1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Rows
              </th>
              <td className="px-6 py-4">Tuck FL</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">2min</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">Pull1</td>
              <td className="px-6 py-4">C1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Hangs
              </th>
              <td className="px-6 py-4">One-Arm</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">30sec</td>
              <td className="px-6 py-4">2min</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">Pull1</td>
              <td className="px-6 py-4">D1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Bicep Curls
              </th>
              <td className="px-6 py-4">10kg</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">15</td>
              <td className="px-6 py-4">2min</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">Pull1</td>
              <td className="px-6 py-4">D2</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Wrist Curls
              </th>
              <td className="px-6 py-4">5kg</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">15</td>
              <td className="px-6 py-4">1min</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex space-x-2 justify-center my-5">
        <button
          type="button"
          className="inline-block rounded-full bg-indigo-600 text-white
             leading-normal uppercase shadow-md hover:bg-indigo-700 hover:shadow-lg 
             focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 
             active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out 
             w-9 h-9 cursor-pointer"
        >
          <PlusIcon />
        </button>
      </div>
    </>
  );
};

export default Table;
