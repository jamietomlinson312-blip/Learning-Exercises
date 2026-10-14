export const ReportButton = ({ handleClick }) => {
  // handleClick is handleGeneratePDF passed from App
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-sm bg-slate-400 px-2 py-1 rounded-md font-bold text-amber-50 cursor-pointer transition ease-in-out duration-100 hover:bg-slate-600"
    >
      Download PDF report
    </button>
  );
};
