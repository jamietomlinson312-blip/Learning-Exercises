import React from "react";

export const TicketInfo = ({ result, source, children }) => {
  // image source and CSS styling dependend on prop values
  return (
    <div className={result}>
      <img src={source} className="max-w-1/4 border-1" />
      {children}
    </div>
  );
};
