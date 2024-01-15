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
          Join an Event Group - Connect and Enjoy Together
        </h1>
        <Image
          src="/party.jpeg"
          width={5000}
          height={300}
          className="w-full h-[200px] lg:h-[500px] mb-4 lg:mb-10"
        />
        <h2 className="text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 underline">
          Discover Like-Minded People for Your Next Event
        </h2>
        <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5">
          Join an event group to enhance your experience! Connect with people
          attending the same event, whether it's for heightened fun or added
          safety and security.
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 underline">
          How to Join an Event Group in 3 Easy Steps
        </h2>

        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            1. Explore Events
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Browse through upcoming events and find the one you want to attend.
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            2. Join the Event Group
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Once you've chosen an event, join its dedicated group to connect
            with others attending.
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            3. Engage and Enjoy Together
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Share your plans, coordinate meet-ups, and enjoy the event with your
            newfound community!
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h2 className="text-2xl lg:text-4xl font-bold underline">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              What is an Event Group?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              An event group is a community of individuals attending the same
              event, allowing them to connect, coordinate, and enjoy the
              experience together.
            </p>
          </div>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              How can I create an Event Group?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              Currently, our platform focuses on joining existing event groups.
              Look for the group associated with the event you plan to attend.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
