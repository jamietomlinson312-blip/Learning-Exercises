import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { OutputData } from "./components/OutputData";

import "./App.css";
import { Header } from "./components/Header";
import { ReportButton } from "./components/ReportButton";
import { calculateInvestment } from "./util/calculateFunctions";
import { generatePDF } from "./util/generatePDF";

function App() {
  const [userInput, setUserInput] = useState({
    // state variables for data from user input form
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [output, setOutput] = useState([]); // state variable for displaying the full output

  const validateInput = userInput.duration >= 1; // validates that duration greater than zero is inputted

  const handleChange = (inputIdentifier, newValue) => {
    // handling inputs from InputForm and updating state
    setUserInput((userInput) => ({
      ...userInput,
      [inputIdentifier]: +newValue,
    }));
  };

  const handleGeneratePDF = () => {
    // generate PDF report using imported generatePDF and calculateInvestment functions
    generatePDF(userInput, calculateInvestment(userInput));
  };

  const resetFields = () => {
    // event handler for 'reset' button to reset state to default values
    setUserInput({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });
  };

  return (
    <>
      <div className="font-inter max-w-8/10 mx-auto">
        <Header />
        <InputForm
          handleChange={handleChange}
          userInput={userInput}
          reset={resetFields}
        />
        {validateInput ? (
          <div className="flex flex-col gap-2 items-center mb-20">
            <OutputData
              userInput={userInput}
              output={output}
              setOutput={setOutput}
            />
            <ReportButton handleClick={handleGeneratePDF} />
          </div>
        ) : (
          <p className="font-bold text-center mt-10">
            Please enter a duration greater than zero
          </p>
        )}
      </div>
    </>
  );
}

export default App;
