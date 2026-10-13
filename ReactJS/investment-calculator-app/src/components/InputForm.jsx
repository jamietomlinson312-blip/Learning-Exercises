import { ResetButton } from "./ResetButton";

export const InputForm = ({ handleChange, userInput, reset }) => {
  //console.log(userInput);

  return (
    <div className="w-full flex justify-center">
      <form className="p-10 flex items-baseline justify-between shadow-md rounded-b-md">
        <div className="flex flex-col gap-2 items-center">
          <label className="font-bold" htmlFor="initialInvestment">
            Initial Investment ($)
          </label>
          <input
            required
            type="number"
            id="initialInvestment"
            className="border rounded-sm bg-slate-100 max-w-8/10 p-1"
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
            className="border rounded-sm bg-slate-100 max-w-8/10 p-1"
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
        <ResetButton reset={reset} />
      </form>
    </div>
  );
};
