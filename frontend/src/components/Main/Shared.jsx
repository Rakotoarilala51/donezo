import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {PiKanbanFill} from "react-icons/pi";
import { FiList } from "react-icons/fi";
import {FaRegCalendarMinus} from "react-icons/fa"

function Shared() {
  return (
    <div>
      <div className="w-full h-[100px] pt-0 flex justify-between border-b border-stone-300">
        <div className="pl-2 flex flex-col justify-between">
          <div>
          <h3 className="font-medium text-lg">HR Tasks Hub 🚀</h3>
          <p className="text-sm text-stone-500">
            Welcome the human ressource hub
          </p>  
          </div>

          <div className="pb-0 flex justify-between space-x-2">
            <button className="border border-stone-400 rounded-sm h-[60%] w-7 flex justify-center items-center cursor-pointer hover:bg-stone-200">
              <BsThreeDots className="m-2 text-xs font-bold" />
            </button>
            <button className="border border-stone-600 rounded-sm h-[60%] w-[30%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
              <PiKanbanFill className="text-stone-600 m-0.5"/>
              <span className="text-xs text-stone-600 m-0.5">kanban</span>
            </button>
            <button className="border border-stone-400 rounded-sm h-[60%] w-[20%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
              <FiList className="text-stone-500 m-0.5"/>
              <span className="text-xs text-stone-500 m-0.5">list</span>
            </button>
            <button className="border border-stone-400 rounded-sm h-[70%] w-[40%] flex justify-center items-center cursor-pointer hover:bg-stone-200">
              <FaRegCalendarMinus className="text-stone-500 m-0.5"/>
              <span className="text-xs text-stone-500 m-0.5">Calendar</span>
            </button>
          </div>
        </div>
        <div>search here</div>
      </div>
    </div>
  );
}

export default Shared;
