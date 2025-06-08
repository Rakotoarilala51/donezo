import React from "react";
import { FaFire } from "react-icons/fa";
import TaskCard from "./TaskCard";
const tasks = [
  {
    task_id: 301,
    task_name: "Final documentation update",
    description: "Update the user guides and developer documentation for the latest release.",
    Total_subtask: 5,
    subtask_done: 5,
    comment_number: 3,
    pj: 2,
    last_updated: "June 3 2025",
  },
  {
    task_id: 302,
    task_name: "Optimize database queries",
    description: "Refactor and optimize queries for better performance and scalability.",
    Total_subtask: 4,
    subtask_done: 4,
    comment_number: 4,
    pj: 1,
    last_updated: "June 3 2025",
  },
];


export default function Done() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="bg-white w-60 rounded-lg flex items-center">
        <span className="m-1 text-stone-400">+</span>
        <span className="text-sm">Done</span>
        <span className="ml-auto text-sm bg-green-200 rounded-lg m-2 flex items-center pl-1 pr-1">
          <FaFire className="text-sm text-green-400" />
          <p className="text-xs text-green-400">2</p>
        </span>
      </div>
      {
        tasks.map((task, index)=>
        <TaskCard task={task} key={index}/>
        )
      }
    </div>
  );
}
