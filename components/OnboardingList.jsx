import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
const OnboardingList = () => {
  const checklist = [
    {
      task: "Create event",
      sub: "Publish an event to reach millions of people on Letsgo",
      isCompleted: true,
    },
    {
      task: "Set up your organizer profile",
      sub: "Highlight your brand by adding your organizer a name, image, and bio",
      isCompleted: false,
    },
    {
      task: "Add your bank account",
      sub: "Get paid for future ticket sales by entering your bank details",
      isCompleted: false,
    },
    // Add more items as needed
  ];
  return (
    <div className="w-full h-auto text-black mt-5 bg-[#F7F7F7] rounded-lg flex flex-col p-6  shadow-lg">
      <h3 className="text-[24px] font-extrabold">Your Checklist</h3>
      <p className="font-light">
        We make it easy to plan successful events. Here&apos;s how to start!
      </p>
      <ul>
        {checklist.map((item, index) => (
          <li key={index} className="flex items-center m-[20px]">
            {item.isCompleted ? (
              <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
            ) : (
              <FaExclamationCircle className="text-yellow-500 mr-2 text-3xl" />
            )}
            <div>
              <h1 className="font-bold">{item.task}</h1>
              <p className="font-light text-[14px]">{item.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnboardingList;
