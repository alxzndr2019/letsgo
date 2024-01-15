"use client";
import React from "react";
import EventContainer from "@/components/EventContainer";
const page = () => {
  return (
    <div className="flex-grow overflow-auto p-6">
      <EventContainer type="MY_CREATED" />
    </div>
  );
};

export default page;
