import { useState } from "react";
import { Header } from "./Header";
import { JobForm } from "./JobForm";
import "./App.css";

function App() {
  return (
    <>
      <section className="font-inter">
        <Header />
        <JobForm />
      </section>
    </>
  );
}

export default App;
