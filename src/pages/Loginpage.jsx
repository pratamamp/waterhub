import React from "react";
import ImgKeran from "../assets/components/imgkeran";
import { IoMdMailOpen, IoMdKey } from "react-icons/io";
import GoogleIcon from "../assets/components/googleicon";
import TwitterIcon from "../assets/components/twittericon";

function Loginpage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-br from-[#98E8FF] to-[#3587A4]">
        <h2 className="text-btncolor text-3xl p-3">LOGO</h2>
        <ImgKeran className="w-1/2 absolute bottom-0" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center px-5">
        <h2 className="font-bold text-4xl text-headercolor tracking-[0.75rem]">
          WELCOME
        </h2>
        <h3 className="text-sm text-[#97B2C2]">
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
            className="w-full mt-12 rounded-md bg-[#3587A4] p-3 text-white tracking-widest"
          >
            login
          </button>
        </form>
        <h2 className="my-10 tracking-[0.5rem] text-btncolor">OR</h2>
        <div className="space-y-2 flex flex-col items-center justify-center w-2/6">
          <button className="w-full border border-[#C1DFF0] rounded-md flex items-center p-2">
            <GoogleIcon className="w-8 h-8" />
            <p className="mx-auto text-gray-600">Google</p>
          </button>
          <button className="w-full p-2 border border-[#C1DFF0] rounded-md flex items-center p-2">
            <TwitterIcon className="w-8 h-8" />
            <p className="mx-auto text-gray-600">Twitter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
