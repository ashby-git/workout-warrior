import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const Table = () => {
  return (
    <>
      <h1 className="flex justify-center font-bold text-2xl">Week 1</h1>
      <h3 className="py-5 flex justify-center font-semibold text-xl">
        Session 1
      </h3>

      <div className="hidden md:block relative overflow-x-auto shadow-md sm:rounded-lg">
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

      {/* Small Table */}

      <div className="md:hidden relative overflow-x-auto rounded-lg shadow-md w-screen">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                <span className="mr-2">Day :</span>
                <span>Pull1</span>
              </th>

              <th scope="col" className="px-2 py-2">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="mr-3 text-gray-500">
                  A1<span className="ml-1">:</span>
                </div>
                <div className="font-bold">
                  Weighted Chinups
                  <div className="font-normal">
                    <span className="mr-1">4</span>x
                    <span className="mx-1">5</span>@
                    <span className="mx-1">30kg</span>:
                    <span className="ml-1">5min</span>
                  </div>
                </div>
              </th>
              <td className="px-2 py-2 text-center">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="mr-3 text-gray-500">
                  B1<span className="ml-1">:</span>
                </div>
                <div className="font-bold">
                  Rows
                  <div className="font-normal">
                    <span className="mr-1">3</span>x
                    <span className="mx-1">10</span>@
                    <span className="mx-1">Tuck FL</span>:
                    <span className="ml-1">2min</span>
                  </div>
                </div>
              </th>
              <td className="px-2 py-2 text-center">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="mr-3 text-gray-500">
                  C1<span className="ml-1">:</span>
                </div>
                <div className="font-bold">
                  Hangs
                  <div className="font-normal">
                    <span className="mr-1">3</span>x
                    <span className="mx-1">30sec</span>@
                    <span className="mx-1">One-Arm</span>:
                    <span className="ml-1">2min</span>
                  </div>
                </div>
              </th>
              <td className="px-2 py-2 text-center">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="mr-3 text-gray-500">
                  D1<span className="ml-1">:</span>
                </div>
                <div className="font-bold">
                  Bicep Curls
                  <div className="font-normal">
                    <span className="mr-1">2</span>x
                    <span className="mx-1">15</span>@
                    <span className="mx-1">10kg</span>:
                    <span className="ml-1">2min</span>
                  </div>
                </div>
              </th>
              <td className="px-2 py-2 text-center">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="mr-3 text-gray-500">
                  D2<span className="ml-1">:</span>
                </div>
                <div className="font-bold">
                  Wrist Curls
                  <div className="font-normal">
                    <span className="mr-1">2</span>x
                    <span className="mx-1">15</span>@
                    <span className="mx-1">5kg</span>:
                    <span className="ml-1">1min</span>
                  </div>
                </div>
              </th>

              <td className="px-2 py-2 text-center">
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

      {/* Purple Add Button */}
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
