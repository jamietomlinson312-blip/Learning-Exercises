export const ResetButton = ({ reset }) => {
  return (
    <button
      type="button"
      onClick={reset}
      className="max-w-1/2  xl:w-full text-sm bg-slate-400 px-2 py-1 rounded-md font-bold text-amber-50 cursor-pointer transition ease-in-out duration-100 hover:bg-slate-600"
    >
      Reset Fields
    </button>
  );
};
