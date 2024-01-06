import React from "react";

const DashboardHeader = () => {
  return (
    <div className="h-[150px] bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg text-white p-4 sm:p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl italic font-black tracking-[-1.219px]">
          Let&apos;s go
          <span className="text-[#FBBF24] ml-[15px] font-light">manager</span>
        </h1>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
          Sign Out
        </button>
      </div>
      <p>v1.01</p>
    </div>
  );
};

export default DashboardHeader;
