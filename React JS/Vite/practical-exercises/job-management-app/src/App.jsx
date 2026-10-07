import { useEffect, useState } from "react";
import { Header } from "./Header";
import { JobForm } from "./JobForm";
import { JobColumn } from "./JobColumn";
import toStart from "../src/assets/boxicons-8sNDvlFj93Q-unsplash.jpg";
import running from "../src/assets/boxicons-p7IqXRgwNo4-unsplash.jpg";
import completed from "../src/assets/boxicons-xNS3OdHX3ZA-unsplash.jpg";
import "./App.css";

function App() {
  const [currentJobs, setJobs] = useState([
    { id: 1, title: "test 1: ", status: "To Start" },
    { id: 2, title: "test 2: ", status: "Running" },
    { id: 3, title: "test 3: ", status: "Completed" },
    { id: 4, title: "test 4: ", status: "Completed" },
  ]);

  const deleteJob = ({ id }) => {
    setJobs(currentJobs.filter((job) => id !== job.id));
  };

  const newStatus = ({ id, status }) => {
    // updates "status" property depending on dropdown selection in EditButton component. Then re-renders after state change
    setJobs(
      currentJobs.map((job) => {
        if (job.id === id) {
          // maps through currentJobs and only updates job.status if job.id matches the id argument
          job.status = status;
          return job;
        } else return job;
      }),
    );
  };

  const addJob = ({ jobDetails }) => {
    // Updates the state array with jobDetails properties (set in the JobForm Component)
    setJobs([
      ...currentJobs,
      {
        id: currentJobs.length + 1,
        title: jobDetails.title,
        status: jobDetails.status,
      },
    ]);
  };

  return (
    <>
      <section className="p-5 font-inter border-b border border-slate-400">
        <Header />
        <JobForm
          addJob={addJob} // passing the addJob function to update currentJobs on form submission
        />
      </section>
      <section className="p-10 mx-15 grid grid-cols-1 sm:grid-cols-3 border-b border-slate-400 outline-offset-2">
        <JobColumn
          deleteJob={deleteJob} // passing delete and edit functions to use with the buttons in each JobItem component
          editJob={newStatus}
          jobs={currentJobs} // passing the current state as a prop
          title="To Start" // title, used to filter the jobs into each column
          image={toStart} // different image for each column
          alt="pending image"
        />
        <JobColumn
          deleteJob={deleteJob}
          editJob={newStatus}
          jobs={currentJobs}
          title="Running"
          image={running}
          alt="running image"
        />
        <JobColumn
          deleteJob={deleteJob}
          editJob={newStatus}
          jobs={currentJobs}
          title="Completed"
          image={completed}
          alt="completed image"
        />
      </section>
    </>
  );
}

export default App;
