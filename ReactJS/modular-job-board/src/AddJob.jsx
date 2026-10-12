import React from "react";
import { useState } from "react";

export const AddJob = ({
  // imported functions to change state of parent component (App)
  onChangeName,
  onChangeStatus,
  onChangeID,
  onClick,
}) => {
  return (
    // Input fields for adding a new job

    <div className="max-w-1/2 p-4 my-5 mx-auto flex flex-col justify-around bg-slate-50 rounded-md shadow-sm">
      <form className="w-full flex justify-between items-center">
        <input
          id="ID"
          type="text"
          required
          className="border-1 p-1 shadow-md"
          onChange={onChangeID}
          placeholder="Enter ID"
        ></input>
        <input
          id="name"
          type="text"
          required
          className="border-1 p-1 shadow-md"
          onChange={onChangeName}
          placeholder="Enter Name"
        ></input>
        <input
          id="status"
          type="text"
          required
          className="border-1 p-1 shadow-md"
          onChange={onChangeStatus}
          placeholder="Enter Status"
        ></input>
      </form>
      <div className="flex justify-center">
        <button
          className="max-w-1/5 mt-4 text-xs bg-slate-200 px-3 py-1 shadow-sm hover:bg-slate-400"
          onClick={onClick}
        >
          Add Job
        </button>
      </div>
    </div>
  );
};
