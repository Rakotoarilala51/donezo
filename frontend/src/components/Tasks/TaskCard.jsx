import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiSquareCheck } from "react-icons/ci";
import { BiCommentDots } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";

export default function TaskCard({ task }) {
  return (
    <div className="bg-white w-60 rounded-lg flex flex-col shadow">
      <div className="flex items-center p-2">
        <span className="w-2 h-2 bg-stone-700 rounded-full inline-block m-1 outline-2 outline-stone-500"></span>
        <span className="text-xs text-stone-500">{task.last_updated}</span>
      </div>
      <div className="flex items-center ml-2">
        <span className="text-sm font-medium text-black truncate w-40">
          {task.task_name}
        </span>
        <span className="ml-auto p-2">
          <BsThreeDots className="text-xs cursor-pointer font-semibold" />
        </span>
      </div>
      <div className="ml-2 w-52">
        <span className="text-xs text-stone-400 mb-2 truncate block">
          {task.description}
        </span>
      </div>
      { task.subtask_done==0 || task.subtask_done==task.Total_subtask?<></>:
        <div className="m-2 border-t-1 border-stone-400 pt-2">
          <div className="flex items-center">
            <CiSquareCheck className="mr-1" />
            <span className="text-sm">Checklist</span>
            <span className="text-xs ml-auto">
              {task.subtask_done}/{task.Total_subtask}
            </span>
          </div>
          <div className="flex justify-between p-2 space-x-1">
            {Array.from({ length: task.Total_subtask }).map((_, index) => (
              <span
                className={`inline-block h-1 w-full outline-2 rounded-lg ${
                  index < task.subtask_done
                    ? "bg-green-500 outline-green-200"
                    : "bg-stone-400 outline-stone-200"
                }`}
              ></span>
            ))}
          </div>
        </div>
      }

      <div className="border-t-1 p-2 border-stone-400 flex justify-center">
        <span className="border border-stone-400 rounded-lg flex justify-center p-1 space-x-1 m-1">
          <BiCommentDots className="text-sm" />
          <p className="text-xs">{task.comment_number}</p>
        </span>
        <span className="border border-stone-400 rounded-lg flex justify-center p-1 space-x-1 m-1">
          <GoPaperclip className="text-sm" />
          <p className="text-xs">{task.pj}</p>
        </span>
        <span className="ml-auto">{/*Asina Sary eto */}</span>
      </div>
    </div>
  );
}
