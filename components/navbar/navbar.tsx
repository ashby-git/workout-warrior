import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
        <div className="relative h-16 flex justify-between">
          {/* Logo */}
          <div className="relative z-10 px-2 flex lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <h3 className="text-xl font-bold">Workout Warrior</h3>
            </div>
          </div>
          {/* Logout Button */}
          <div className="relative h-16 flex items-center px-2">
            <button
              className="w-full flex items-center justify-center lg:px-4 lg:py-2 px-2 py-1 
            border border-transparent rounded-md shadow-sm text-base font-medium text-white 
            bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
