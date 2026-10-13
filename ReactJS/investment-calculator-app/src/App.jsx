import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { OutputData } from "./components/OutputData";

import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((userInput) => ({
      ...userInput,
      [inputIdentifier]: +newValue,
    }));
  };

  const resetFields = () => {
    setUserInput({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });
  };

  //console.log(userInput);

  return (
    <>
      <div className="font-inter max-w-8/10 mx-auto">
        <Header />
        <InputForm
          handleChange={handleChange}
          userInput={userInput}
          reset={resetFields}
        />
        <OutputData userInput={userInput} />
      </div>
    </>
  );
}

export default App;
