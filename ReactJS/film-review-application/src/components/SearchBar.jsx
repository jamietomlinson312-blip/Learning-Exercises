import { useState } from "react";

export const SearchBar = ({ search }) => {
  const [field, setField] = useState("");

  const handleChange = (e) => {
    setField(e.target.value);
  };

  const handleClick = () => {
    let newInput = field.replace(/ /g, "%20");
    search(newInput);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Film Title..."
        className="px-2 py-1 border border-slate-200 rounded-md"
        onChange={handleChange}
      />
      <button
        type="button"
        className="px-2 py-1 bg-sky-300 rounded-md cursor-pointer hover:bg-sky-500 text-xs font-bold"
        onClick={handleClick}
      >
        Search
      </button>
    </>
  );
};
