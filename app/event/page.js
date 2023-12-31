import React from "react";
import Navbar from "@/components/Navbar";
import NavSpace from "@/components/NavSpace";
import Image from "next/image";
import EventContainer from "@/components/EventContainer";
const page = () => {
  return (
    <>
      {" "}
      <Navbar />
      <NavSpace />
      <div className="flex flex-col gap-4 justify-between lg:w-[1000px] lg:flex-row mx-auto mt-[40px] items-center mb-[100px]">
        <div className="w-[350px] mx-auto lg:w-[490px] h-[715px] bg-white text-black rounded-md">
          {/* Picture box */}
          <Image
            src="/wizver.jpeg"
            alt="My Image"
            width={350}
            height={715}
            className="h-[715px] lg:w-[490px] rounded-md"
            objectFit="cover"
          />
        </div>
        <div className="w-[350px] mx-auto lg:w-[490px] h-[715px]  text-white">
          <h1 className="text-4xl font-black">Wizkid Around the world</h1>
          <p className="font-tiny mt-5">
            Integer pretium sodales maximus. Etiam vitae dui orci. Maecenas eget
            fermentum tortor. Fusce maximus tellus vitae eros interdum, nec
            hendrerit augue rhoncus. Vestibulum mollis hendrerit tincidunt.
            Proin in scelerisque mi. Etiam ultricies semper mauris, vitae
            iaculis dui convallis nec. Curabitur massa turpis, viverra aliquam
            fringilla ut, iaculis ut enim. Integer pretium sodales maximus.
            Etiam vitae dui orci. Maecenas eget fermentum tortor. Fusce maximus
            tellus vitae eros interdum, nec hendrerit augue rhoncus. Vestibulum
            mollis hendrerit tincidunt. Proin in scelerisque mi. Etiam ultricies
            semper mauris, vitae iaculis dui convallis nec. Curabitur massa
            turpis, viverra aliquam fringilla ut, iaculis ut enim.
          </p>
          <p className="font-bold mt-5">Date: June 23, 2020 - June 30, 2020</p>
          <p className="font-bold mt-5">Location: Beijing</p>
          <p className="font-bold mt-5">Venue: The 100 Club</p>
          <p className="font-bold mt-5">
            Address: 26 Bishop Dr. Baton Rouge, LA 70806
          </p>
          <div className="mt-5 flex justify-between">
            <div className="flex gap-2">
              <label>Ticket</label>
              <select className=" text-black">
                <option>Select Ticket</option>
              </select>
            </div>
            <div className="flex gap-2">
              <label>Number of Ticket</label>
              <select className=" text-black">
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center ">
            <div className="flex gap-3 items-center">
              <h className="text-3xl font-medium">Total</h>
              <h1 className="text-4xl font-black">£40</h1>
            </div>
            <button className="bg-white text-black px-10 py-3 rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <EventContainer type="SIMILAR" />
    </>
  );
};

export default page;
