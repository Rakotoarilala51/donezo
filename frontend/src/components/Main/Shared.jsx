import React from "react";

import { SharedPageHeader } from "../Headers/SharedPageHeader";
import { FaEdit, FaFire } from "react-icons/fa";
import {ImSpinner3} from "react-icons/im"

function Shared() {
  return (
    <div>
      <SharedPageHeader />
      <div className="bg-stone-200 border border-stone-300 rounded-xl min-h-screen p-3 m-2 flex justify-between space-x-2">
        <div className="flex flex-col">
          <div className="bg-white w-60 rounded-lg flex items-center">
            <span className="m-1 text-stone-400">+</span>
            <span className="text-sm">To-do</span>
            <span className="ml-auto m-2 text-sm bg-red-200 rounded-lg flex items-center pl-1 pr-1">
              <FaEdit className="text-sm text-red-500 "/>
              <p className="display-inline text-xs text-red-500">8</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white w-60 rounded-lg flex items-center">
            <span className="m-1 text-stone-400">+</span>
            <span className="text-sm">On Progress</span>
            <span className="ml-auto text-sm m-2 bg-violet-200 rounded-lg flex items-center pl-1 pr-1">
              <ImSpinner3 className="text-sm text-violet-600"/>
              <p className="text-xs text-violet-500">2</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white w-60 rounded-lg flex items-center">
            <span className="m-1 text-stone-400">+</span>
            <span className="text-sm">Need Review</span>
            <span className="ml-auto text-sm bg-orange-300 rounded-lg m-2 flex items-center pl-1 pr-1">
              <FaFire className="text-sm text-orange-400"/>
              <p className="text-xs text-orange-400">3</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white w-60 rounded-lg flex items-center">
            <span className="m-1 text-stone-400">+</span>
            <span className="text-sm">Done</span>
            <span className="ml-auto text-sm bg-green-300 rounded-lg m-2 flex items-center pl-1 pr-1">
              <FaFire className="text-sm text-green-400"/>
              <p className="text-xs text-green-400">2</p>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Shared;
