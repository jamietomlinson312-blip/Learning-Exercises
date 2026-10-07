import React from "react";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

export const JobItem = ({ id, title, deleteJob, editJob }) => {
  return (
    <div className="mt-3 flex gap-3 items-start">
      <p>{title}</p>
      <DeleteButton deleteJob={deleteJob} id={id} />
      <EditButton editJob={editJob} id={id} />
    </div>
  );
};
