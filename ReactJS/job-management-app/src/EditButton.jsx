import { useState } from "react";
import React from "react";

export const EditButton = ({ jobs, id, setJob }) => {
  let [status, setStatus] = useState("To Start");

  const handleChange = (e) => setStatus(e.target.value); // getting the value from the dropdown

  const handleClick = () => {
    setJob(
      // updating state in App
      jobs.map((job) => {
        if (job.id === id) {
          // maps through currentJobs and only updates job.status if job.id matches the id argument
          job.status = status;
          console.log(job);
          return job;
        } else return job;
      }),
    );
  };

  return (
    <div className="flex gap-3 items-start">
      <select
        className="border-1 p-1 rounded-sm text-xs font-bold"
        onChange={handleChange} // handleChange function called if a different value is selected from the dropdown menu
      >
        <option value="To Start">To Start</option>
        <option value="Running">Running</option>
        <option value="Completed">Completed</option>
      </select>
      <button
        type="submit"
        onClick={handleClick}
        // function passes the ID and selected status as arguments
        className="bg-neutral-200 rounded-sm px-2 py-1 text-xs font-bold border-1 transition ease-in-out duration-100 delay-50 hover:bg-neutral-300"
      >
        Edit Job
      </button>
    </div>
  );
};
