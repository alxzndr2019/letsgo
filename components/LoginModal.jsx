import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const LoginModal = ({ onClose }) => {
  return (
    <div className="bg-white w-full lg:w-[594px] h-screen lg:h-[589px] rounded-3xl relative ">
      <IoCloseSharp
        className="absolute top-5 right-5 text-2xl cursor-pointer text-black"
        onClick={onClose}
      />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-black text-4xl  italic font-black tracking-[-1.219px] m-4">
          Let's Go !
        </h1>
        <div className="flex flex-col gap-4 text-black">
          <input
            type="text"
            placeholder="Email"
            className="w-[350px] lg:w-[400px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[350px] lg:w-[400px] h-[60px] rounded-full border-2 border-[#ECECEC] px-5"
          />
        </div>
        <button className="w-[350px] lg:w-[400px] h-[60px] rounded-full bg-[#2F3538] text-white font-medium mt-5">
          Login
        </button>
        <p className="text-black mt-5">
          Don't have an account?{" "}
          <span className="text-[#2F3538] cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
