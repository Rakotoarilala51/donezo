import React from "react";
import { FaEdit } from "react-icons/fa";
import TaskCard from "./TaskCard";

export default function Todo() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="bg-white w-60 rounded-lg flex items-center">
        <span className="m-1 text-stone-400">+</span>
        <span className="text-sm">To-do</span>
        <span className="ml-auto m-2 text-sm bg-red-200 rounded-lg flex items-center pl-1 pr-1">
          <FaEdit className="text-sm text-red-500 " />
          <p className="display-inline text-xs text-red-500">8</p>
        </span>
      </div>
      <TaskCard/>
    </div>
  );
}
