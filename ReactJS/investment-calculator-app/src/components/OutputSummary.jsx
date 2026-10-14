export const OutputSummary = ({ outputData }) => {
  return (
    <div className="flex flex-col max-w-1/2 mx-auto items-center p-5 mb-20 text-xl font-bold  border-2 rounded-md shadow-md shadow-emerald-200">
      <p>
        Current amount invested: $
        {outputData.slice(-1)[0].valueEndOfYear.toFixed(2)}
      </p>
      <p>
        Total Interest Earned: ${outputData.slice(-1)[0].interest.toFixed(2)}
      </p>
    </div>
  );
};
