import { useState } from "react";
import { InputForm } from "./components/InputForm";

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
      <div className="font-inter w-8/10 mx-auto">
        <Header />
        <InputForm
          handleChange={handleChange}
          userInput={userInput}
          reset={resetFields}
        />
      </div>
    </>
  );
}

export default App;
