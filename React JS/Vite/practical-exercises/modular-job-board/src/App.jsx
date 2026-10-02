import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JobList } from "./JobList";
import { AddJob } from "./AddJob";
import "./App.css";

function App() {
  const jobs = [
    { id: 1, name: "Email Extractor", status: "running" },
    { id: 2, name: "Data Analyzer", status: "completed" },
    { id: 3, name: "Report Generator", status: "running" },
  ];

  const [currentJobs, setJobs] = useState(jobs);
  const [newJob, setNewJob] = useState({
    // initialise blank job object
    id: "",
    name: "",
    status: "",
  });

  const addJob = () => {
    if (
      newJob.id.trim() !== "" && // conditional logic to make sure all fields are filled
      newJob.name !== "" &&
      newJob.status !== ""
    ) {
      setJobs([...currentJobs, newJob]);
      setNewJob({ id: "", name: "", status: "" });
    }
  };
  return (
    <>
      <div className="font-inter bg-slate-100">
        <Header />
        <JobList jobs={currentJobs} />
        <AddJob
          onClick={() => addJob()}
          onChangeID={(e) => setNewJob({ ...newJob, id: e.target.value })}
          onChangeName={(e) => setNewJob({ ...newJob, name: e.target.value })}
          onChangeStatus={(e) =>
            setNewJob({ ...newJob, status: e.target.value })
          }
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
