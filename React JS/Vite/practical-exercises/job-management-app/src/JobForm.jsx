import React from "react";
import { useState } from "react";

export const JobForm = ({ addJob }) => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    category: "Read Emails",
    status: "To Start",
  });

  const categories = ["Read Emails", "Web Parsing", "Send Emails"];
  const statuses = ["To Start", "Running", "Completed"];

  const handleChange = (e) => {
    // event handler to set values for the jobDetails state variable

    if (e.target.name === "title") {
      setJobDetails({ ...jobDetails, title: e.target.value });
    } else if (e.target.name === "category") {
      setJobDetails({ ...jobDetails, category: e.target.value });
    } else if (e.target.name === "status") {
      setJobDetails({ ...jobDetails, status: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    // event handler to submit jobDetails values and call the addJob function (to change state in App component)
    e.preventDefault();

    if (jobDetails.title !== "" && jobDetails.title.length > 3) {
      // only call addJob if title field is not empty

      addJob({ jobDetails });
      alert("Job Submitted Successfully");
    } else alert("Title must be at least 4 characters long");
  };

  return (
    <div className="max-w-9/10 sm:max-w-8/10 sm:mx-auto sm:mt-30 mt-50">
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          name="title"
          type="text"
          required
          placeholder="Enter Job Title"
          className="max-w-9/10 sm:w-6/10 px-2 py-1 border-1 bg-neutral-50 rounded-md"
          defaultValue={jobDetails.title}
          onChange={handleChange}
        />
        <div className="max-w-9/10 sm:w-6/10 mt-4 flex sm:flex-row flex-col gap-3 justify-between">
          <select
            className="flex gap-3"
            name="category"
            defaultValue={jobDetails.category}
            onChange={handleChange}
          >
            {categories.map(
              (
                category, // mapping through categories array to render the dropdown list
              ) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ),
            )}
          </select>
          <div className="flex gap-3">
            <select
              className="border-1 p-1 rounded-sm text-xs font-bold"
              defaultValue={jobDetails.status}
              name="status"
              onChange={handleChange}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-neutral-200 rounded-sm px-2 py-1 text-xs font-light border-1 transition ease-in-out duration-100 delay-50 hover:bg-neutral-300"
            >
              Add Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
