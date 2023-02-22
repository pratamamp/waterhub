import React from "react";
import Logos from "../../assets/components/logos";
import {
  IoCompassOutline,
  IoGrid,
  IoSearchCircleOutline,
} from "react-icons/io5";
import { BiUserCircle, BiBell, BiCog } from "react-icons/bi";
import { GiPipes } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";

function BoardHome() {
  return (
    <div className="flex">
      <img
        src={"/board-left-shape.svg"}
        alt="shape-board"
        className="absolute top-0 left-0 -z-20"
      />

      <div className="w-1/5 h-screen px-2 mx-5 py-2">
        <div className="flex space-x-2 items-center my-5">
          <Logos className="w-10" />
          <h3 className="font-semibold text-white">WaterApp</h3>
        </div>
        <div className="flex items-center space-x-2 my-10">
          <div className=" rounded-full bg-white w-12 h-12"></div>
          <h2 className="text-sm text-white">Hi, admin</h2>
        </div>
        <div className="w-full flex flex-col items-center bg-white rounded-md shadow-md text-txtcolor font-semibold tracking-wide border border-x-2">
          <ul className="w-full space-y-3 p-10">
            <li className="flex space-x-5 items-center">
              <IoCompassOutline className="w-8 h-8" />
              <h3>Explore</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <IoGrid className="w-8 h-8" />
              <h3>Dashboard</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <GiPipes className="w-8 h-8" />
              <h3>Assets</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <HiUsers className="w-8 h-8" />
              <h3>Customers</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <IoGrid className="w-8 h-8" />
              <h3>Dashboard</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <GiPipes className="w-8 h-8" />
              <h3>Assets</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <HiUsers className="w-8 h-8" />
              <h3>Customers</h3>
            </li>
            <li className="flex space-x-5 items-center">
              <BiCog className="w-8 h-8" />
              <h3>Settings</h3>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <div className="h-20 w-full flex justify-end items-center px-10 py-3">
          <ul className="flex space-x-3 text-icocolor">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <BiUserCircle className="w-6 h-6" />
            </li>
            <li>
              <BiBell className="w-6 h-6" />
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between px-5">
          <h1 className="text-4xl font-bold text-white/30 tracking-wide text-center">
            OVERVIEW
          </h1>
          <form className="flex items-center p-6">
            <label className="relative focus-within:text-icocolor block mt-2">
              <IoSearchCircleOutline className="w-8 h-8 pointer-events-none absolute text-txtcolor top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search for anything..."
                className="form-input-border border-gray-900 py-3 px-4 bg-[#FAFAFA] placeholder-txtcolor text-txtcolor appearance-none w-full block pl-14 focus:outline-none"
              />
            </label>
          </form>
        </div>

        <div className="grid grid-cols-9 grid-rows-6 gap-5 text-gray-500 h-[calc(100vh_-_12rem)] p-4 pr-10 pl-5">
          <div
            className="bg-[#ECF0F1] row-span-2
           col-span-3 rounded-lg"
          >
            1
          </div>
          <div className="bg-sky-200 row-span-6 col-span-6 rounded-lg">2</div>
          <div className="bg-[#ECF0F1] row-span-4 col-span-3 rounded-lg">3</div>
        </div>
      </div>
    </div>
  );
}

export default BoardHome;
