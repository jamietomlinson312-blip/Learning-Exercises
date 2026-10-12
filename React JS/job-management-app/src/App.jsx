import { useEffect, useState } from "react";
import { Header } from "./Header";
import { JobForm } from "./JobForm";
import { JobColumn } from "./JobColumn";
import toStart from "../src/assets/boxicons-8sNDvlFj93Q-unsplash.jpg";
import running from "../src/assets/boxicons-p7IqXRgwNo4-unsplash.jpg";
import completed from "../src/assets/boxicons-xNS3OdHX3ZA-unsplash.jpg";
import "./App.css";

function App() {
  const [currentJobs, setJobs] = useState([]);
  //console.log(currentJobs);

  const deleteJob = ({ id }) => {
    setJobs(currentJobs.filter((job) => id !== job.id));
  };

  return (
    <>
      <section className="p-5 font-inter border-b border border-slate-400">
        <Header />
        <JobForm
          setJob={setJobs}
          jobs={currentJobs} // passing the addJob function to update currentJobs on form submission
        />
      </section>
      <section className="p-10 mx-15 grid grid-cols-1 sm:grid-cols-3 border-b border-slate-400 outline-offset-2">
        <JobColumn
          deleteJob={deleteJob} // passing delete and edit functions to use with the buttons in each JobItem component
          setJob={setJobs}
          jobs={currentJobs} // passing the current state as a prop
          title="To Start" // title, used to filter the jobs into each column
          image={toStart} // different image for each column
          alt="pending image"
        />
        <JobColumn
          deleteJob={deleteJob}
          jobs={currentJobs}
          setJob={setJobs}
          title="Running"
          image={running}
          alt="running image"
        />
        <JobColumn
          deleteJob={deleteJob}
          jobs={currentJobs}
          setJob={setJobs}
          title="Completed"
          image={completed}
          alt="completed image"
        />
      </section>
    </>
  );
}

export default App;
