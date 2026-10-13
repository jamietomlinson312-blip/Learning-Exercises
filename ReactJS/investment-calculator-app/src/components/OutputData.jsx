import { useEffect, useState } from "react";
import { OutputSummary } from "./OutputSummary";

export const OutputData = ({ userInput }) => {
  const [output, setOutput] = useState([]);

  function calculateInvestment(userInput) {
    let annualData = [];
    let investmentVal = userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const interestInYear = investmentVal * (userInput.expectedReturn / 100);
      investmentVal += interestInYear + userInput.annualInvestment;
      annualData.push({
        year: i + 1,
        interest: interestInYear,
        valueEndOfYear: investmentVal,
        annualInvestment: userInput.annualInvestment,
      });
      setOutput(annualData);
    }
  }

  useEffect(() => {
    calculateInvestment(userInput);
  }, [userInput]);

  //console.log(userInput);

  return (
    <>
      <table className="my-20 w-full mx-auto ">
        <thead className="border-b p-2">
          <tr className="bg-slate-100 rounded-sm">
            <th className="p-2">Year</th>
            <th className="p-2">Investment Value</th>
            <th className="p-2">Interest (Year)</th>
            <th className="p-2">Total Interest</th>
            <th className="p-2">Invested Capital</th>
          </tr>
        </thead>

        <tbody className="pt-10">
          {output.map((yearData, index) => {
            if (userInput.duration <= 0) {
              return (
                <tr className="text-center font-bold">
                  Please enter a duration greater than zero.
                </tr>
              );
            }
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              userInput.initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr className="" key={index}>
                <td className="p-2 text-center">{yearData.year}</td>
                <td className="p-2 text-center">
                  {yearData.valueEndOfYear.toFixed(2)}
                </td>
                <td className="p-2 text-center">
                  {yearData.interest.toFixed(2)}
                </td>
                <td className="p-2 text-center">{totalInterest.toFixed(2)}</td>
                <td className="p-2 text-center">
                  {totalAmountInvested.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <OutputSummary outputData={output} />
    </>
  );
};
