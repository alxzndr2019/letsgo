"use client";

import React, { useState, useEffect, useRef } from "react";
import GetStartedButton from "./Buttons/GetStartedButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const node = useRef();
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <nav className="flex  items-center text-white justify-between w-full mx-auto  p-5 fixed bg-[#212121] shadow-md z-50 ">
      <div>
        <h1 className="text-white text-4xl  italic font-black tracking-[-1.219px]">
          Let&apos;s Go !
        </h1>
      </div>

      <div className="hidden lg:block flex space-x-8">
        <a href="#" className="text-white font-medium">
          Find Event
        </a>
        <a href="#" className="text-white font-medium">
          Create Event
        </a>
        <a href="#" className="text-white font-medium">
          Groups
        </a>
        <a href="#" className="text-white font-medium">
          Gift a Ticket
        </a>
      </div>
      <div className="flex hidden lg:block  space-x-8 items-center">
        <a
          href="#"
          className="text-white font-medium"
          onClick={() => setIsModalOpen(true)}
        >
          Login
        </a>
        <GetStartedButton />
      </div>
      <div className="lg:hidden relative" ref={node}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoCloseSharp className="font-bold text-[30px]" />
          ) : (
            <GiHamburgerMenu className="font-bold text-[30px]" />
          )}
        </button>

        {isOpen && (
          <div className=" absolute right-0 transform -translate-x-1/12 top-full bg-[#212121] flex flex-col gap-3 text-white p-5 round-xl shadow-lg">
            <a href="#" className="text-white font-medium">
              Find Event
            </a>
            <a href="#" className="text-white font-medium">
              Create Event
            </a>
            <a href="#" className="text-white font-medium">
              Groups
            </a>
            <a href="#" className="text-white font-medium">
              Gift a Ticket
            </a>
            <a
              href="#"
              className="text-white font-medium"
              onClick={() => setIsModalOpen(true)}
            >
              Login
            </a>
            <GetStartedButton />
          </div>
        )}
      </div>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 backdrop-blur-md z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <LoginModal onClose={() => setIsModalOpen(false)} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
