import React from "react";
import TicketTable from "@/components/TicketTable";

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

const Page = () => {
  return (
    <div className="flex-grow overflow-auto p-6">
      Ticket Purchase Table Per event
      <TicketTable tickets={tickets} />
    </div>
  );
};

export default Page;
