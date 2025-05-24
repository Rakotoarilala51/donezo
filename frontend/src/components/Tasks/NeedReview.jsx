import React from "react";
import { FaFire } from "react-icons/fa";
import TaskCard from "./TaskCard";
const tasks = [
  {
    task_id: 201,
    task_name: "Deploy project to production",
    description: "Push the final version of the project to the production environment.",
    Total_subtask: 6,
    subtask_done: 6,
    comment_number: 7,
    pj: 4,
    last_updated: "June 2 2025",
  },
  {
    task_id: 202,
    task_name: "Write unit tests",
    description: "Ensure full coverage of critical components and functions.",
    Total_subtask: 5,
    subtask_done: 5,
    comment_number: 3,
    pj: 2,
    last_updated: "June 2 2025",
  },
  {
    task_id: 203,
    task_name: "Prepare release notes",
    description: "Summarize the new features, bug fixes, and improvements for the release.",
    Total_subtask: 4,
    subtask_done: 4,
    comment_number: 2,
    pj: 1,
    last_updated: "June 2 2025",
  },
  {
    task_id: 204,
    task_name: "Conduct final review",
    description: "Perform a thorough review of the codebase and documentation before release.",
    Total_subtask: 3,
    subtask_done: 3,
    comment_number: 1,
    pj: 2,
    last_updated: "June 2 2025",
  },
];


export default function NeedReview() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="bg-white w-60 rounded-lg flex items-center">
        <span className="m-1 text-stone-400">+</span>
        <span className="text-sm">Need Review</span>
        <span className="ml-auto text-sm bg-orange-200 rounded-lg m-2 flex items-center pl-1 pr-1">
          <FaFire className="text-sm text-orange-400" />
          <p className="text-xs text-orange-400">3</p>
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
