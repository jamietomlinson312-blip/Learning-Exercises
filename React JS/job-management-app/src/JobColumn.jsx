import React, { useState, useEffect } from "react";
import { JobItem } from "./JobItem";

export const JobColumn = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="flex justify-center text-lg font-bold mb-5">
        {props.title}
      </h2>
      <img src={props.image} alt={props.alt} className="max-w-1/3" />
      {props.jobs.map(
        (job) =>
          job.status === props.title && (
            <li key={job.id} className="list-none font-light mt-3">
              <JobItem
                jobs={props.jobs}
                id={job.id}
                title={job.title}
                category={job.category}
                deleteJob={props.deleteJob}
                setJob={props.setJob}
              />
            </li>
          ),
      )}
    </div>
  );
};
