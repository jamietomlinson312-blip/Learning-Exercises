import React from "react";
import { Button } from "./Button";
import { AddButton } from "./AddButton";

export const JobForm = () => {
  return (
    <div className="max-w-8/10 mx-auto mt-30">
      <form className="w-full flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Job Title"
          className="w-6/10 px-2 py-1 border-1 bg-neutral-50 rounded-md"
        />
        <div className="w-6/10 mt-4 flex gap-3 justify-between">
          <div className="flex gap-3">
            <Button value="Read Emails" />
            <Button value="Web Parsing" />
            <Button value="Send Emails" />
          </div>
          <div className="flex gap-3">
            <select className="border-1 p-1 rounded-sm text-xs font-bold">
              <option value="start">Start Process</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="stopped">Stopped</option>
            </select>
            <AddButton />
          </div>
        </div>
      </form>
    </div>
  );
};
