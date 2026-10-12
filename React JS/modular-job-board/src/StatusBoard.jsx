import React from "react";
import { TicketInfo } from "./TicketInfo";
import failedURL from "../src/assets/boxicons-IbhtQuaKY-A-unsplash.jpg"; // importing local image files
import progressURL from "../src/assets/boxicons-8sNDvlFj93Q-unsplash.jpg";
import compURL from "../src/assets/boxicons-xNS3OdHX3ZA-unsplash.jpg";

export const StatusBoard = () => {
  return (
    <>
      <h1 className="text-2xl underline font-bold text-center mb-10">
        Status Board
      </h1>
      <div className="w-full flex justify-around">
        <TicketInfo
          result="max-w-1/4 p-5 flex flex-col gap-5 items-center bg-green-600 border-1 rounded-md shadow-sm" // passing result prop to render TicketInfo depending on 'status'
          source={compURL}
        >
          <p className="text-center">Tickets completed</p>
        </TicketInfo>
        <TicketInfo
          result="max-w-1/4 p-5 flex flex-col gap-5 items-center bg-yellow-600 border-1 rounded-md shadow-sm"
          source={progressURL}
        >
          <p className="text-center">Tickets In Progress</p>
        </TicketInfo>
        <TicketInfo
          result="max-w-1/4 p-5 flex flex-col gap-5 items-center bg-red-600 border-1 rounded-md shadow-sm"
          source={failedURL}
        >
          <p className="text-center">Tickets Failed</p>
        </TicketInfo>
      </div>
    </>
  );
};
