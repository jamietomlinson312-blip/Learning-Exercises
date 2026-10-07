import React from "react";

export const DeleteButton = ({ id, deleteJob }) => {
  return (
    <>
      <button
        onClick={() => deleteJob({ id })}
        className="bg-neutral-200 rounded-sm px-2 py-1 text-xs font-bold border-1 transition ease-in-out duration-100 delay-50 hover:bg-neutral-300"
      >
        Delete Job
      </button>
    </>
  );
};
