import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import Image from "next/image";
const EventCard = () => {
  return (
    <div className="w-[299px] shadow-md">
      <div className="relative">
        <Image
          src="/wiz.jpeg"
          alt="My Image"
          width={299}
          height={162.636}
          className="bg-red-500 w-full h-[162.636px] rounded-t-2xl"
        />
        <div className="absolute top-0 left-0 bg-white text-black m-2 font-medium text-[9px] flex items-center justify-center  w-[89px] h-[26px] rounded-full">
          Hybrid Event
        </div>

        <div className="absolute bottom-[-18px] right-0 w-[68px] h-[68px] text-black bg-white rounded-xl  m-2 shadow-md">
          <div className="flex gap-0 flex-col items-center  p-2 text-center">
            <p className="text-[11.372px] font-bold">APR</p>
            <h1 className="text-[28.429px] font-black">14</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full rounded-b-2xl bg-[#ECECEC] p-5">
        <p className="text-black font-bold">
          Wonder Girls 2010 Wonder Girls World Tour San Francisco
        </p>
        <p className="text-[#6A6A6A]">Hosted by : Pepsi</p>
        <div className="text-black flex gap-5 ">
          <div className="flex  items-center gap-1">
            <span>
              <FaCheckCircle />
            </span>{" "}
            143 going
          </div>
          <div className="flex  items-center gap-1">
            <span>
              <IoTicketSharp />
            </span>{" "}
            Free
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
