import React, { useState, useEffect } from "react";
import { JobItem } from "./JobItem";

export const JobColumn = (props) => {
  let [currentJobs, setJobs] = useState(props.jobs);
  useEffect(() => {
    //console.log("Job column input...", props.jobs);
    setJobs(props.jobs.filter((job) => job.status === props.title)); // filtering the jobs by job.status property - only matching are rendered in each JobColumn component
  }, [props.jobs]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="flex justify-center text-lg font-bold mb-5">
        {props.title}
      </h2>
      <img src={props.image} alt={props.alt} className="max-w-1/3" />
      {currentJobs.map((job) => (
        <li key={job.id} className="list-none font-light mt-3">
          <JobItem
            id={job.id}
            title={job.title}
            deleteJob={props.deleteJob}
            editJob={props.editJob}
          />
        </li>
      ))}
    </div>
  );
};
