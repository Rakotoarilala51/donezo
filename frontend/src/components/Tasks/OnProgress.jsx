import React from "react";
import { ImSpinner3 } from "react-icons/im";
import TaskCard from "./TaskCard";
const tasks = [
  {
    task_id: 101,
    task_name: "Complete initial setup",
    description:
      "Set up the project repository, install dependencies, and configure linters.",
    Total_subtask: 8,
    subtask_done: 2,
    comment_number: 5,
    pj: 3,
    last_updated: "June 1 2025",
  },
  {
    task_id: 102,
    task_name: "Fix major bugs",
    description: "Identify and fix critical bugs that block the release.",
    Total_subtask: 5,
    subtask_done: 0,
    comment_number: 2,
    pj: 1,
    last_updated: "June 1 2025",
  },
];

export default function OnProgress() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="bg-white w-60 rounded-lg flex items-center">
        <span className="m-1 text-stone-400">+</span>
        <span className="text-sm">On Progress</span>
        <span className="ml-auto text-sm m-2 bg-violet-200 rounded-lg flex items-center pl-1 pr-1">
          <ImSpinner3 className="text-sm text-violet-600" />
          <p className="text-xs text-violet-500">2</p>
        </span>
      </div>
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
}
