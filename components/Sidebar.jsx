"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaCalendarAlt,
  FaTicketAlt,
  FaChartLine,
  FaCog,
  FaCommentDollar,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-auto bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg   text-white w-full sm:w-64 relative overflow-auto">
      <div className="p-6">
        <nav>
          <ul className=" text-[18px] space-y-[43px]">
            <li
              className={`mb-2 p-4 rounded-lg ${
                pathname === "/dashboard" ? "bg-gray-500" : ""
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <Link href="/dashboard" className="flex items-center text-white">
                <FaHome className="mr-5 text-3xl" />
                Home
              </Link>
            </li>
            <li
              className={`mb-2 p-4 rounded-lg ${
                pathname === "/dashboard/events" ? "bg-gray-500" : ""
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <Link
                href="/dashboard/events"
                className="flex items-center text-white"
              >
                <FaCalendarAlt className="mr-5 text-3xl" />
                Events
              </Link>
            </li>
            <li
              className={`mb-2 p-4 rounded-lg ${
                pathname === "/dashboard/orders" ? "bg-gray-500" : ""
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <Link
                href="/dashboard/orders"
                className="flex items-center text-white"
              >
                <FaTicketAlt className="mr-5 text-3xl" />
                Orders
              </Link>
            </li>
            <li
              className={`mb-2 p-4 rounded-lg ${
                pathname === "/dashboard/reporting" ? "bg-gray-500" : ""
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <Link
                href="/dashboard/reporting"
                className="flex items-center text-white"
              >
                <FaChartLine className="mr-5 text-3xl" />
                Reporting
              </Link>
            </li>
            <li
              className={`mb-2 p-4 rounded-lg ${
                pathname === "/dashboard/finance" ? "bg-gray-500" : ""
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <Link
                href="/dashboard/finance"
                className="flex items-center text-white"
              >
                <FaCommentDollar className="mr-5 text-3xl" />
                Finances
              </Link>
            </li>
            <li
              className={`mb-2 p-4 rounded-lg ${
                pathname === "/dashboard/settings" ? "bg-gray-500" : ""
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <Link
                href="/dashboard/settings"
                className="flex items-center text-white"
              >
                <FaCog className="mr-5 text-3xl" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
