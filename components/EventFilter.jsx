import React from "react";
import { FiSearch } from "react-icons/fi";

const EventFilter = () => {
  return (
    <div className="w-full lg:w-full mx-auto mt-5">
      <div className="text-black flex items-center justify-center gap-4 mx-auto  lg:flex">
        <div className="relative">
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-lg" />
          <input
            type="text"
            placeholder="Search by name, location, or category"
            className="pl-10 bg-[#EBEBEB] w-[353px] lg:w-[353px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5"
          />
        </div>
        <select className="bg-[#EBEBEB] w-[168px] lg:w-[168px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5 hidden lg:block ">
          <option value="">Group</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-[168px] bg-[#EBEBEB] lg:w-[168px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5  hidden lg:block">
          <option value="">Weekday</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-[168px] bg-[#EBEBEB] lg:w-[168px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5  hidden lg:block">
          <option value="">Event Type</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-[168px] bg-[#EBEBEB] lg:w-[168px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5  hidden lg:block">
          <option value="">Category</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default EventFilter;
