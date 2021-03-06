import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon, XIcon } from "@heroicons/react/outline";

export default function ExerciseInfoModal() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="text-left flex justify-center items-center h-full">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="md:col-span-2 transform transition-all h-max w-full max-w-4xl">
              <div className="flex justify-end translate-y-full">
                <XIcon
                  className="h-5 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-2 sm:gap-5">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Day
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Pull1 or Chest or Date"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Letter
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. A1"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Exercise
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Pull Ups"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Intensity
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 15kg"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Sets
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 3"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Reps
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 15"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Rest
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 2min"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 sm:flex sm:flex-row sm:justify-end">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent 
              shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white 
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="sm:mt-0 mt-2 w-6/12 inline-flex justify-center rounded-md border border-gray-300 
              shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 
              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      // ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="w-6/12 inline-flex justify-center rounded-md border border-gray-300 
              shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 
              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm align-bottom"
                    >
                      <TrashIcon className="h-6 sm:h-5" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
