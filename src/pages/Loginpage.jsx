import React from "react";
import ImgKeran from "../assets/components/imgkeran";
import { IoMdMailOpen, IoMdKey } from "react-icons/io";

function Loginpage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-br from-[#98E8FF] to-[#3587A4]">
        <h2>LOGO</h2>
        <ImgKeran className="w-1/2 absolute bottom-0" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center px-5">
        <h2 className="font-bold text-4xl text-primary tracking-widest">
          WELCOME
        </h2>
        <h3 className="text-sm text-secondary">
          start monitoring your dashboard
        </h3>
        <form className="mt-10 w-2/6 text-center">
          <label className="relative text-txtcolor focus-within:text-icocolor block mt-2">
            <IoMdMailOpen className="w-8 h-8 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@email.com"
              className="form-input-border border-gray-900 py-3 px-4 bg-[#F7F9F9] placeholder-txtcolor text-icocolor appearance-none w-full block pl-14 focus:outline-none"
            />
          </label>

          <label className="relative text-txtcolor focus-within:text-icocolor block mt-2">
            <IoMdKey className="w-8 h-8 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="At least 6 character"
              className="form-input-border border-gray-900 py-3 px-4 bg-[#F7F9F9] placeholder-txtcolor text-icocolor appearance-none w-full block pl-14 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full mt-16 rounded-md bg-[#3587A4] p-2 text-white font-semibold tracking-widest"
          >
            login
          </button>
        </form>
        <h2 className="my-10 tracking-widest">OR</h2>
        <button className="w-2/6 h-8 bg-sky-600"></button>
      </div>
    </div>
  );
}

export default Loginpage;
