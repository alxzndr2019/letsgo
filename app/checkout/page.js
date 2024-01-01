"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import NavSpace from "@/components/NavSpace";
const CheckoutPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const tickets = [
    {
      id: 1,
      quantity: 2,
      name: "Wizkid Dubai",
      price: 10,
      description: "Wizkid will take on the world in this Concert",
    },
    {
      id: 2,
      quantity: 2,
      name: "Burna boy big 7",
      price: 10,
      description: "Burna will take on the world in this Concert",
    },
    {
      id: 1,
      quantity: 2,
      name: "Wizkid Dubai",
      price: 10,
      description: "Wizkid will take on the world in this Concert",
    },
    {
      id: 1,
      quantity: 2,
      name: "Wizkid Dubai",
      price: 10,
      description: "Wizkid will take on the world in this Concert",
    },
    {
      id: 2,
      quantity: 2,
      name: "Burna boy big 7",
      price: 10,
      description: "Burna will take on the world in this Concert",
    },
  ];
  const handlePayment = () => {
    switch (selectedPaymentMethod) {
      case "flutterwave":
        console.log("Pay with Flutterwave");
        break;
      case "paystack":
        console.log("Pay with Paystack");
        break;
      case "applePay":
        console.log("Pay with Apple Pay");
        break;
      case "googlePay":
        console.log("Pay with Google Pay");
        break;
      default:
        console.log("No payment method selected");
    }
  };
  return (
    <>
      {" "}
      <Navbar />
      <NavSpace />
      <NavSpace />
      <h1 className="text-xl lg:text-4xl font-black text-center m-5 italic">
        Lets Checkout
      </h1>
      <div className="lg:w-[1000px] gap-4 flex flex-col lg:flex-row flex-col-reverse  justify-between mx-auto">
        <div className="mx-auto w-[340px] lg:w-[490px] h-[715px] ">
          <h1 className="text-2xl mb-2">Billing Details</h1>
          <form>
            <div className="mb-4">
              <label className="block  text-xl mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-5 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Attendee name"
              />
            </div>
            <div className="mb-4">
              <label className="block   text-xl mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Attendee email"
              />
            </div>
            <div className="mb-4">
              <label className="block  text-xl mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Attendee phone number"
              />
            </div>
          </form>
          <h1 className="text-2xl mt-2">Payment Options</h1>
          <div className="flex  space-x-4 mt-2 items-center">
            <img
              src="flutterwave.svg"
              alt="Flutterwave"
              className={
                selectedPaymentMethod === "flutterwave"
                  ? "h-8 lg:h-[40px] bg-white rounded-sm border-blue-500 border-2"
                  : "h-8 lg:h-[40px] bg-white"
              }
              onClick={() => setSelectedPaymentMethod("flutterwave")}
            />
            <img
              src="paystack.svg"
              alt="Paystack"
              className={
                selectedPaymentMethod === "paystack"
                  ? "h-8 lg:h-[40px] border-blue-500 border-2"
                  : "h-8 lg:h-[40px]"
              }
              onClick={() => setSelectedPaymentMethod("paystack")}
            />
            <img
              src="apple-pay.svg"
              alt="Apple Pay"
              className={
                selectedPaymentMethod === "applePay"
                  ? "h-8 lg:h-[40px] border-blue-500 border-2"
                  : "h-8 lg:h-[40px]"
              }
              onClick={() => setSelectedPaymentMethod("applePay")}
            />
            <img
              src="google-pay.svg"
              alt="Google Pay"
              className={
                selectedPaymentMethod === "googlePay"
                  ? "h-8 lg:h-[40px] border-blue-500 border-2"
                  : "h-8 lg:h-[40px]"
              }
              onClick={() => setSelectedPaymentMethod("googlePay")}
            />
          </div>
          <button
            className="bg-white hover:bg-gray-200 text-black font-medium py-5 text-xl  rounded focus:outline-none focus:shadow-outline mt-4 w-full"
            type="button"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>
        <div className="mx-auto w-[340px] lg:w-[490px] h-[715px] ">
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl mb-2">Summary</h1>
            <h1 className="text-xl font-tiny underline decoration-dotted">
              Edit
            </h1>
          </div>

          <div className=" h-[80%] rounded-md bg-opacity-20 bg-white backdrop-filter backdrop-blur-sm overflow-auto shadow-md">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="p-5">
                <div className="flex justify-between">
                  <h1 className="text-xl">{`${ticket.quantity} x ${ticket.name}`}</h1>
                  <h1 className="text-xl font-extrabold">${ticket.price}</h1>
                </div>
                <p className="pt-2 text-[12px] font-tiny">
                  {ticket.description}
                </p>
                <hr className="mt-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-[340px] fixed bottom-0 left-0 right-0  py-5 px-10 shadow-lg flex justify-between items-center lg:w-[1000px] mx-auto rounded-lg mb-5 bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg ">
        <h2 className="text-xl font-bold">Total:</h2>
        <h2 className="text-xl font-bold">
          $
          {tickets.reduce(
            (total, ticket) => total + ticket.price * ticket.quantity,
            0
          )}
        </h2>
      </div>
    </>
  );
};

export default CheckoutPage;
