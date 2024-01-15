"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import "../globals.css";
import EventCreationWizard from "./events/EventCreationWizard";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardHeader />

        <button onClick={toggleSidebar} className="block lg:hidden">
          {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
          {isModalOpen && (
            <>
              <div className="fixed inset-0 backdrop-blur-md z-40"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <EventCreationWizard
                  setIsModalOpen={setIsModalOpen}
                  isModalOpen={isModalOpen}
                />
              </div>
            </>
          )}
          {isSidebarVisible && (
            <Sidebar
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              className="w-full sm:w-64"
            />
          )}
          <div className="overflow-auto flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
