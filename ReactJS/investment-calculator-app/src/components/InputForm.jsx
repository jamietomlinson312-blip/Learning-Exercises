import { ResetButton } from "./ResetButton";
import { useState, useEffect } from "react";

export const InputForm = ({ handleChange, userInput, reset }) => {
  const [userError, setError] = useState("");

  const errVal = 0;
  // set of error messages for empty inputs
  useEffect(() => {
    switch (
      errVal // set error message depending on user input
    ) {
      case userInput.initialInvestment:
        setError("Initial investment should be greater than zero");
        break;
      case userInput.expectedReturn:
        setError("Expected return should be greater than zero");
        break;
      default:
        setError(""); // reset to empty string
    }
  }, [userInput]);

  console.log(userError);

  return (
    <div className="mt-30 mx-auto flex flex-col">
      <form className="p-10 flex flex-col gap-5 xl:flex-row xl:items-baseline xl:justify-between shadow-md rounded-b-md">
        <div className="flex flex-col gap-2 items-center">
          <label className="font-bold" htmlFor="initialInvestment">
            Initial Investment ($)
          </label>
          <input
            required
            type="number"
            id="initialInvestment"
            className={
              userError === "Initial investment should be greater than zero"
                ? "border border-red-800  rounded-sm bg-slate-100 max-w-8/10 p-1"
                : "border rounded-sm bg-slate-100 max-w-8/10 p-1"
            }
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label className="font-bold" htmlFor="annualInvestment">
            Annual Investment ($)
          </label>
          <input
            required
            type="number"
            id="annualInvestment"
            className="border rounded-sm bg-slate-100 max-w-8/10 p-1"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label className="font-bold" htmlFor="expectedReturn">
            Expected Return (%)
          </label>
          <input
            required
            type="number"
            id="expectedReturn"
            className={
              // Conditional rendering - if field is zero, gives red border
              userError === "Expected return should be greater than zero"
                ? "border border-red-800 rounded-sm bg-slate-100 max-w-8/10 p-1"
                : "border rounded-sm bg-slate-100 max-w-8/10 p-1"
            }
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 items-center">
          <label className="font-bold" htmlFor="duration">
            Duration (years)
          </label>
          <input
            required
            type="number"
            id="duration"
            className="border rounded-sm bg-slate-100 max-w-8/10 p-1"
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-4 items-center">
          <ResetButton reset={reset} />
        </div>
      </form>
      {userError && ( // conditional rendering of error message
        <p className="mt-5 text-xs text-red-400 font-italic">{userError}</p>
      )}
    </div>
  );
};
