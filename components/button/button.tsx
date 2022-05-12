import React from "react";

export const Button: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="w-max flex items-center justify-center lg:px-4 lg:py-2 px-2 py-1 
            border border-transparent rounded-md shadow-sm text-xl font-medium text-white 
            bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
    >
      {props.children}
    </button>
  );
};
