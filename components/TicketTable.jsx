import React from "react";

const TicketTable = ({ tickets }) => {
  const totalIncome = tickets.reduce(
    (total, ticket) => total + ticket.totalPrice,
    0
  );

  return (
    <div className="shadow-lg rounded-lg overflow-hidden w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 overflow-auto">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ticket ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Purchase Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attendee names
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black divide-y divide-gray-200 overflow-auto">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticket.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticket.totalPrice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticket.purchaseDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticket.paymentStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {ticket.attendeeNames.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <p className="text-sm text-gray-500">Total Income: {totalIncome}</p>
      </div>
    </div>
  );
};

export default TicketTable;
