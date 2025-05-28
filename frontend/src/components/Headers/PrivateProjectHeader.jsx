import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiKanbanFill } from "react-icons/pi";
import { FiList } from "react-icons/fi";
import { FaRegCalendarMinus } from "react-icons/fa";
import {RiSearch2Line} from "react-icons/ri"
import {IoFilter} from "react-icons/io5"
import {HiSortDescending} from "react-icons/hi"

export const PrivatePageHeader=()=> {
  return (
    <div className="w-full h-[100px] pt-0 flex justify-between border-b border-stone-300">
      <div className="pl-2 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-lg">HR Tasks Hub 🗿</h3>
          <p className="text-sm text-stone-500">
            Welcome the human ressource hub
          </p>
        </div>

        <div className="pb-0 flex justify-between space-x-2">
          <button className="border border-stone-400 rounded-sm h-[60%] w-7 flex justify-center items-center cursor-pointer hover:bg-stone-200">
            <BsThreeDots className="m-2 text-xs font-bold" />
          </button>
          <button className="border border-stone-600 rounded-sm h-[60%] w-[30%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
            <PiKanbanFill className="text-stone-600 m-0.5" />
            <span className="text-xs text-stone-600 m-0.5">kanban</span>
          </button>
          <button className="border border-stone-400 rounded-sm h-[60%] w-[20%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
            <FiList className="text-stone-500 m-0.5" />
            <span className="text-xs text-stone-500 m-0.5">list</span>
          </button>
          <button className="border border-stone-400 rounded-sm h-[70%] w-[40%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
            <FaRegCalendarMinus className="text-stone-500 m-0.5" />
            <span className="text-xs text-stone-500 m-0.5">Calendar</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between pr-2">
        <div></div>
        <div></div>
        <div className="flex justify-between items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="search here..."
              className="rounded-sm h-7 border border-stone-400 m-2 pl-5 py-2 text-xs outline-none focus:ring-2 focus:ring-stone-300 w-35 text-gray-600"
            />
            <RiSearch2Line className="absolute top-1/2 left-3 transform -translate-y-1/2 text-sm font-bold" />
          </div>
          <button className="border border-stone-400 rounded-sm h-[60%] w-[20%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
            <IoFilter className="text-stone-900 m-0.5 text-sm" />
            <span className="text-xs text-stone-900 m-0.5">Filter</span>
          </button>
          <button className="border border-stone-400 rounded-sm h-[60%] w-[20%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
            <HiSortDescending className="text-stone-900 m-0.5 text-sm" />
            <span className="text-xs text-stone-900 m-0.5">Sort</span>
          </button>
        </div>
      </div>
    </div>
  );
}


