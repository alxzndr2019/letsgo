"use client";
import React from "react";
import EventContainer from "@/components/EventContainer";
import TicketTable from "@/components/TicketTable";
import NavSpace from "@/components/NavSpace";
const tickets = [
  {
    id: "1",
    price: 100,
    quantity: 2,
    totalPrice: 200,
    purchaseDate: "2022-01-01",
    paymentStatus: "Paid",
    attendeeNames: ["John Doe", "Jane Doe"],
  },
  {
    id: "2",
    price: 200,
    quantity: 1,
    totalPrice: 200,
    purchaseDate: "2022-01-02",
    paymentStatus: "Paid",
    attendeeNames: ["Alice"],
  },
  // Add more tickets here...
];
const EventAnalytics = ({ tickets }) => {
  const totalSales = tickets.reduce(
    (total, ticket) => total + ticket.totalPrice,
    0
  );
  const totalTicketsSold = tickets.reduce(
    (total, ticket) => total + ticket.quantity,
    0
  );
  const averageTicketPrice = totalSales / totalTicketsSold;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-3xl font-bold mb-4">Event Analytics</h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1 bg-black shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold">${totalSales}</p>
        </div>
        <div className="flex-1 bg-black shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold">Total Tickets Sold</h3>
          <p className="text-2xl font-bold">{totalTicketsSold}</p>
        </div>
        <div className="flex-1 bg-black shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold">Average Ticket Price</h3>
          <p className="text-2xl font-bold">${averageTicketPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
const page = () => {
  return (
    <div className="flex-grow overflow-auto p-6">
      <EventAnalytics tickets={tickets} />
      <NavSpace />
      <TicketTable tickets={tickets} />
    </div>
  );
};

export default page;
