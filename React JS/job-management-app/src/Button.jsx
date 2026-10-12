import React from "react";

export const Button = ({ value }) => {
  return (
    <button className="bg-neutral-200 rounded-sm px-2 py-1 text-xs font-light border-1 transition ease-in-out duration-100 delay-50 hover:bg-neutral-300">
      {value}
    </button>
  );
};
