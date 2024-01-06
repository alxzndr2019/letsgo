import React from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import NextEvent from "@/components/NextEvent";
import OnboardingList from "@/components/OnboardingList";
import AccountPlan from "@/components/AccountPlan";

const page = () => {
  return (
    <div className="flex-grow overflow-auto p-6">
      <h1 className="font-bold text-[27px] italic p-4">Hello, Alex</h1>
      <div className="flex flex-col sm:flex-row justify-between gap-4 p-6">
        <div className="w-full sm:w-[59%]">
          <NextEvent />
          <OnboardingList />
        </div>
        <div className="w-full sm:w-[49%] mt-4 sm:mt-0">
          <AccountPlan />
        </div>
      </div>
    </div>
  );
};

export default page;
