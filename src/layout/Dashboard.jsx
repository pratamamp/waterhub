import React from "react";
import { Outlet } from "react-router-dom";
import {
  GiWaterDrop,
  GiFlowers,
  GiPayMoney,
  GiMineralPearls,
  GiTreasureMap,
} from "react-icons/gi";

function Dashboard() {
  return (
    <div className="relative flex h-screen">
      <div className="hidden w-2/12 h-screen bg-slate-100 drop-shadow-md flex-none md:block">
        <div className="p-3 flex items-center space-x-2 bg-sky-50">
          <GiFlowers className="w-12 h-12 text-blue-300" />
          <h3 className=" text-sky-300 font-semibold font-roboto">
            Water Surveys
          </h3>
        </div>

        <div className="p-3 text-slate-300 text-sm font-poppins">
          <h3 className="p-2 text-slate-500 font-semibold">Analytics</h3>
          <ul className="py-3 text-slate-500 space-y-3 tracking-wide">
            <li className="w-full">
              <GiWaterDrop className="w-4 h-4 float-left mr-4 text-green-500" />
              <span className="">Surveyor</span>
            </li>
            <li className="w-full">
              <GiPayMoney className="w-4 h-4 float-left mr-4 text-red-500" />
              <span className="text-slate-400">Transportation</span>
            </li>
            <li className="w-full">
              <GiMineralPearls className="w-4 h-4 float-left mr-4" />
              <span className="text-slate-400">Resource</span>
            </li>
            <li className="w-full">
              <GiTreasureMap className="w-4 h-4 float-left mr-4 text-cyan-600" />
              <span className="text-slate-400">Location</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grow flex flex-col bg-gray-100 h-screen">
        <div className="flex justify-between h-12 items-center m-3 px-3">
          <h2 className="text-2xl text-slate-500 font-semibold font-roboto">
            Dashboard
          </h2>
          <h3 className="text-sm font-roboto text-slate-300">
            Oct 20, 2022 - Oct 25, 2022
          </h3>
        </div>

        <div className="flex flex-grow"></div>

        <div className="h-1/3 w-full flex-none md:flex">
          <div className="bg-white my-2 mx-2 card md:w-1/2">bottom 1</div>
          <div className="bg-white my-2 mx-2 card md:flex-auto">bottom 2</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
