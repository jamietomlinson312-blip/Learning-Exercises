import { useEffect, useState } from "react";
import { OutputSummary } from "./OutputSummary";
import { calculateInvestment } from "../util/calculateFunctions";

export const OutputData = ({ userInput, output, setOutput }) => {
  useEffect(() => {
    // hook to call setOutput whenever userInput variable changes
    setOutput(calculateInvestment(userInput));
  }, [userInput]);

  return (
    <>
      <table className="my-20 w-full mx-auto ">
        <thead className="border-b p-2">
          <tr className="bg-slate-100 rounded-sm">
            <th className="p-2">Year</th>
            <th className="p-2">Investment Value (£)</th>
            <th className="p-2">Interest (Year)</th>
            <th className="p-2">Total Interest (£)</th>
            <th className="p-2">Invested Capital (£)</th>
          </tr>
        </thead>

        <tbody className="pt-10">
          {output.map((yearData, index) => {
            // map through output array (returned from calculateInvestment function)
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year - // additional calculations
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
    </>
  );
};
