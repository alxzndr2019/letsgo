import React from "react";

const NextEvent = () => {
  return (
    <div className="w-full h-auto sm:h-[109px] bg-[#F7F7F7] rounded-lg flex flex-col sm:flex-row justify-between items-center  shadow-lg">
      <div className="text-black flex flex-col p-5 ">
        <p className="text-[20px] font-extrabold">Your next event</p>
        <p className="text-[20px] font-medium">Go to events</p>
      </div>
      <div className="flex items-center p-4">
        <div className="flex justify-between gap-1">
          <div className="text-black flex flex-col">
            <p className="text-[20px] font-black text-center">Dec</p>
            <p className="text-[20px] font-black text-center">13</p>
          </div>
          <div className="w-[62px] h-[62px] bg-gray-300 rounded-lg"></div>
        </div>
        <div className="text-black flex flex-col m-2 ">
          <p className="text-[20px] font-medium">Event Name</p>
          <p className="text-[15px] font-thin">
            Starts Dec 13, 2023 at 10:00 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
