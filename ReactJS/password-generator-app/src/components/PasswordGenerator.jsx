export const PasswordGenerator = () => {
  return (
    <div className="shadow-md rounded-md border justify-center flex flex-col gap-3 p-5 mx-auto mt-40">
      <h1 className="font-semibold text-xl">Generate Password:</h1>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="password"
          className="w-8/10 border rounded-md bg-amber-100 py-1 px-3"
        />
        <button className="cursor-pointer px-2 py-1 rounded-md bg-sky-400 text-xs text-white font-semibold border shadow-xs">
          Copy
        </button>
      </div>
      <div className="flex gap-4">
        <input type="range" min={6} max={100} className="cursor-pointer" />
        <label>Length:</label>
        <div>
          <input type="checkbox" id="numInput" />
          <label htmlFor="numInput" className="ml-1">
            Numbers?
          </label>
        </div>
        <div>
          <input type="checkbox" id="charInput" />
          <label htmlFor="charInput" className="ml-1">
            Special Characters?
          </label>
        </div>
      </div>
    </div>
  );
};
