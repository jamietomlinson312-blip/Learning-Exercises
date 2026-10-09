import React, { useState } from "react";

export const FormButton = ({
  title,
  currentCategories,
  validate,
  clickHandler,
}) => {
  const notSelected =
    "bg-neutral-200 rounded-sm px-2 py-1 text-sm font-light border-1 transition ease-in-out duration-100 delay-50 hover:bg-neutral-300";
  const selected =
    "bg-slate-700 rounded-sm px-2 py-1 text-sm text-slate-100 font-light border-1 transition ease-in-out duration-100 delay-50 hover:bg-neutral-300";
  console.log(currentCategories);
  const [cssClass, setCSS] = useState(notSelected);
  const handleClick = () => {
    clickHandler(title);
    validate(title) ? setCSS(notSelected) : setCSS(selected);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={cssClass}>
        {title}
      </button>
    </>
  );
};
