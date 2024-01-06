"use client";

import React, { useState, useEffect, useRef } from "react";
import GetStartedButton from "./Buttons/GetStartedButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <a
          href="/"
          className="text-white text-4xl  italic font-black tracking-[-1.219px]"
        >
          Let&apos;s Go !
        </a>
      </div>

      <div className="hidden lg:block flex space-x-8 ">
        <a href="/explore" className="text-white font-medium">
          Expore Our events
        </a>
        <a href="/event-ticketing" className="text-white font-medium">
          Ticket your event
        </a>
        <a href="/sell" className="text-white font-medium">
          Sell or Gift your tickets
        </a>
        <a href="/groups" className="text-white font-medium">
          Event Groups
        </a>
      </div>

      <div className="flex hidden lg:block  space-x-8 items-center">
        <a
          href="#"
          className="text-white font-medium "
          onClick={() => setIsCartOpen(true)}
        >
          Cart
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
      <div className="lg:hidden relative" ref={node}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoCloseSharp className="font-bold text-[30px]" />
          ) : (
            <GiHamburgerMenu className="font-bold text-[30px]" />
          )}
        </button>

        {isOpen && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#212121] flex flex-col gap-10 text-white p-5 round-xl shadow-lg ">
            <IoCloseSharp
              className="font-bold text-[30px]"
              onClick={() => setIsOpen(!isOpen)}
            />

            <a
              href="/explore"
              className="text-white font-medium text-2xl text-center"
            >
              Expore Our events
            </a>
            <a
              href="/event-ticketing"
              className="text-white font-medium text-2xl text-center"
            >
              Ticket your event
            </a>
            <a
              href="/sell"
              className="text-white font-medium text-2xl text-center"
            >
              Sell or Gift your tickets
            </a>
            <a
              href="/groups"
              className="text-white font-medium text-2xl text-center"
            >
              Event Groups
            </a>
            <a
              href="#"
              className="text-white text-2xl font-medium text-center "
              onClick={() => setIsCartOpen(true)}
            >
              Cart
            </a>
            <a
              href="#"
              className="text-white font-medium text-center text-2xl"
              onClick={() => setIsModalOpen(true)}
            >
              Login
            </a>
            <a className="text-center">
              <GetStartedButton />
            </a>
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
      {isCartOpen && (
        <>
          <div className="fixed inset-0 backdrop-blur-md z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <CartModal onClose={() => setIsCartOpen(false)} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
