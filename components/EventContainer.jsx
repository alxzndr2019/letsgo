import React from "react";
import EventCard from "./EventCard";
import EventFilter from "./EventFilter";

const EventContainer = ({ type }) => {
  const eventNumbers = [1, 2, 3, 5, 6, 7, 8];
  return (
    <div className="w-full lg:w-[1000px] mx-auto text-white rounded-2xl ">
      <h1 className="text-white text-4xl  italic font-black tracking-[-1.219px] my-4">
        {type === "ALL" && "All Events "}
        {type === "ONLINE" && "Online Events 🧑🏾‍💻"}
        {type === "HOTTEST" && "Hottest Events 🔥"}
      </h1>
      {type === "ALL" && <EventFilter />}

      <hr className="my-4" />
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 place-items-center">
        {eventNumbers.map((number, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
