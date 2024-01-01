import React from "react";
import Navbar from "@/components/Navbar";
import NavSpace from "@/components/NavSpace";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <NavSpace />

      <div className="w-full lg:w-[1000px] mx-auto p-4 lg:p-10">
        <h1 className="text-lg lg:text-4xl font-black text-center m-4 lg:m-10 italic">
          Ticket your event
        </h1>
        <Image
          src="/party.jpeg"
          width={5000}
          height={300}
          className="w-full h-[200px] lg:h-[500px] mb-4 lg:mb-10"
        />
        <h2 className="text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 underline">
          Planning an Event?
        </h2>
        <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5">
          From clubnights to comedy shows, gigs, festivals and more , ticket
          your events in minutes
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 underline">
          Create your first event in 3 easy steps
        </h2>

        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            1. Create an account
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Sign up for a free account and start creating your event in minutes
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            2. Add your event details
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Start building your event using an easy-to-use guided tool
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            3. Start selling tickets
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Hit publish and start selling
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h2 className="text-2xl lg:text-4xl font-bold underline">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              How much does it cost to sell tickets?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              Paid tickets are charged at 2% + 99p* on our starter package.
            </p>
          </div>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              Can I sell free tickets?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              You can sell free tickets on Lets go and ticketing tools are free
              of charge.
            </p>
          </div>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              What kind of event can I sell tickets for?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              You can sell tickets for any kind of event: festivals, comedy
              nights, screenings, gigs, workshops, clubnights, community fairs,
              business conferences, yoga classes, charity fundraisers, virtual
              events, local football matches and more.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
