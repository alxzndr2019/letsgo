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
          Resell or Gift Event Tickets
        </h1>
        <Image
          src="/party.jpeg"
          width={5000}
          height={300}
          className="w-full h-[200px] lg:h-[500px] mb-4 lg:mb-10"
        />
        <h2 className="text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 underline">
          Have Extra Tickets? Resell or Gift Them!
        </h2>
        <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5">
          Whether you want to recoup costs or spread the joy, easily resell or
          gift your already purchased tickets for various events.
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 underline">
          Share Your Tickets in 3 Easy Steps
        </h2>

        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            1. Log into Your Account
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Access your account and navigate to your purchased tickets.
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            2. Choose Resell or Gift Option
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            Select the tickets you want to resell or gift and choose the
            appropriate option.
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h3 className="text-xl lg:text-3xl font-semibold">
            3. Connect with Buyers or Recipients
          </h3>
          <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
            List your tickets for resale or provide details for gifting and
            connect with interested buyers or recipients.
          </p>
        </section>
        <section className="mt-4 lg:mt-10">
          <h2 className="text-2xl lg:text-4xl font-bold underline">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              Can I gift tickets to someone else?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              Absolutely! You can easily gift your purchased tickets to friends
              or family by providing their details during the gifting process.
            </p>
          </div>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              Are there any fees for reselling tickets?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              Transaction fees may apply for ticket resale. Check our terms and
              conditions for more details.
            </p>
          </div>
          <div className="mt-2 lg:mt-5">
            <h3 className="text-xl lg:text-3xl font-semibold">
              What events can I resell or gift tickets for?
            </h3>
            <p className="text-white text-xl lg:text-3xl mt-2 lg:mt-5 font-thin">
              You can resell or gift tickets for various events, including
              festivals, comedy nights, screenings, gigs, workshops, club
              nights, community fairs, business conferences, yoga classes,
              charity fundraisers, virtual events, local football matches, and
              more.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
