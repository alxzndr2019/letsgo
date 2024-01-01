import React from "react";
import Navbar from "@/components/Navbar";
import NavSpace from "@/components/NavSpace";
import EventFilter from "@/components/EventFilter";
import EventContainer from "@/components/EventContainer";
const Explore = () => {
  return (
    <>
      {" "}
      <Navbar />
      <NavSpace />
      <NavSpace />
      <section className="mx-auto">
        <EventContainer type="ALL" />
      </section>
    </>
  );
};

export default Explore;
