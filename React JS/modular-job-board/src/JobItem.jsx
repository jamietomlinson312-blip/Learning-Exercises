import React from "react";

const JobItem = ({ job }) => {
  return (
    //render properties from job
    <>
      ID: {job.id} Name: {job.name} Status: {job.status}
    </>
  );
};
export default JobItem;
