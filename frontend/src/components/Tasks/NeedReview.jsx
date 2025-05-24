import React from "react";
import { FaFire } from "react-icons/fa";

export default function NeedReview() {
  return (
    <div className="flex flex-col">
      <div className="bg-white w-60 rounded-lg flex items-center">
        <span className="m-1 text-stone-400">+</span>
        <span className="text-sm">Need Review</span>
        <span className="ml-auto text-sm bg-orange-200 rounded-lg m-2 flex items-center pl-1 pr-1">
          <FaFire className="text-sm text-orange-400" />
          <p className="text-xs text-orange-400">3</p>
        </span>
      </div>
    </div>
  );
}
