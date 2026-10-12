import React, { useState } from "react";
import JobItem from "./JobItem";
import { AddJob } from "./AddJob";

export const JobList = ({ jobs, deleteJob, editJobs }) => {
  let [show, setShow] = useState(true); // State for toggling display

  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <ul className="w-full flex flex-col items-start list-disc p-4 mt-10 bg-slate-50 shadow-md">
          <h2 className="mb-4 text-xl font-bold underline">Job List</h2>
          <button
            className="flex justify-center gap-2 items-center mx-auto mb-1 px-3 py-2 border-1 shadow-xl text-sm bg-gray-50"
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
                <li
                  key={job.id}
                  className={
                    job.status === "running"
                      ? "text-green-700 p-4"
                      : "text-red-700 p-4" // Conditional rendering
                  }
                >
                  <JobItem job={job} />
                  <div>
                    <button
                      onClick={() => deleteJob(job.id)} // calling the 'deleteJob' prop
                      className="px-3 py-2 mt-2 mb-2 ml-4 border-1 shadow-xl text-xs bg-gray-50 text-gray-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => editJobs(job.id)} // calling the 'editJobs' prop
                      className="px-3 py-2 mt-2 mb-2 ml-4 border-1 shadow-xl text-xs bg-gray-50 text-gray-700"
                    >
                      Edit
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
