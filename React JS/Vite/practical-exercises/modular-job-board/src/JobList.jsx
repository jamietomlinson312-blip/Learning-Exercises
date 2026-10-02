import React, { useState } from "react";
import JobItem from "./JobItem";
import { AddJob } from "./AddJob";

export const JobList = ({ jobs }) => {
  let [show, setShow] = useState(true); // State for toggling display

  return (
    <>
      <ul className="max-w-1/2 mx-auto flex flex-col items-center list-disc p-4 mt-10 bg-slate-50 shadow-md">
        <h2 className="mb-4 text-xl font-bold underline">Job List</h2>
        <button
          className="flex justify-center gap-2 items-center mx-auto mb-4 shadow-xl text-sm bg-gray-50 backdrop-blur-md 
        lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 
        before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-500 
        before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
        overflow-hidden border-2 rounded-full group"
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle Job List
        </button>
        {show &&
          jobs.map((job) => {
            // Map through jobs and render JobItem components (passing each job object as a prop)
            return (
              <div className="max-w-1/2 flex items-center gap-4">
                <li
                  key={job.id}
                  className={
                    job.status === "running" ? "text-green-700" : "text-red-700" // Conditional rendering
                  }
                >
                  <JobItem job={job} />
                </li>
              </div>
            );
          })}
      </ul>
    </>
  );
};
