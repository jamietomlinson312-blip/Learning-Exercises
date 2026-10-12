import React from "react";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

export const JobItem = ({ jobs, id, title, category, deleteJob, setJob }) => {
  return (
    <div className="mt-3 p-5 flex flex-col gap-6 justify-between items-start border-1 rounded-sm shadow-sm">
      <div className="flex gap-3">
        <p>{title}</p>
        <DeleteButton deleteJob={deleteJob} id={id} />
        <EditButton jobs={jobs} setJob={setJob} id={id} />
      </div>

      <div className="flex gap-6 justify-center">
        <p className="font-bold">Categories:</p>
        {category.map((i, index) => (
          <p
            key={index}
            className="bg-neutral-200 rounded-sm px-2 py-1 text-xs font-light"
          >
            {" "}
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};
