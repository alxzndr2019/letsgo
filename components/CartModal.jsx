import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const cartItems = [
  {
    name: "Event 1",
    description: "This is a description",
    price: "£10",
    image: "https://picsum.photos/200",
    quantity: 2,
  },
  {
    name: "Event 2",
    description: "This is a description",
    price: "£10",
    image: "https://picsum.photos/200",
    quantity: 2,
  },
  {
    name: "Event 2",
    description: "This is a description",
    price: "£10",
    image: "https://picsum.photos/200",
    quantity: 2,
  },
  {
    name: "Event 3",
    description: "This is a description",
    price: "£10",
    image: "https://picsum.photos/200",
    quantity: 2,
  },
  {
    name: "Event 4",
    description: "This is a description",
    price: "£10",
    image: "https://picsum.photos/200",
    quantity: 2,
  },
  {
    name: "Event 4",
    description: "This is a description",
    price: "£10",
    image: "https://picsum.photos/200",
    quantity: 2,
  },
];

const CartModal = ({ onClose }) => {
  return (
    <div className="shadow-lg bg-white w-full lg:w-[765px] h-screen lg:h-[516px] rounded-3xl relative ">
      <IoCloseSharp
        className="text-black absolute top-5 right-5 text-2xl cursor-pointer lg:text-white"
        onClick={onClose}
      />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="lg:bg-black w-full rounded-tl-3xl rounded-tr-3xl">
          <h1 className="text-black lg:text-white  text-4xl italic  font-black tracking-[-1.219px] m-4">
            Your Cart
          </h1>{" "}
        </div>
        <div className="flex flex-col gap-4 text-black overflow-y-auto w-[70%]">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">{item.price}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 w-full flex flex-col  justify-center">
          <div className="text-[#2F3538]  w-[70%] mx-auto flex justify-between">
            <p className="font-tiny">Subtotal</p>
            <p className="font-bold">£40</p>
          </div>

          <a
            href="/checkout"
            className="bg-black w-[70%] mx-auto text-white px-4 py-2 rounded mt-4 block text-center"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
