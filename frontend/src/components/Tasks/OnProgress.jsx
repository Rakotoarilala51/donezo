import React from "react";
import {ImSpinner3} from "react-icons/im"
export default function OnProgress() {
  return (
    <div className="flex flex-col">
      <div className="bg-white w-60 rounded-lg flex items-center">
        <span className="m-1 text-stone-400">+</span>
        <span className="text-sm">On Progress</span>
        <span className="ml-auto text-sm m-2 bg-violet-200 rounded-lg flex items-center pl-1 pr-1">
          <ImSpinner3 className="text-sm text-violet-600" />
          <p className="text-xs text-violet-500">2</p>
        </span>
      </div>
    </div>
  );
}
