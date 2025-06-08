import React from "react";
import { FaEdit } from "react-icons/fa";
import TaskCard from "./TaskCard";
const tasks = [
  {
    task_id: 69,
    task_name: "Review and update something in the code",
    description:
      "Analyze current job and do more and more stuff we haven't done yet",
    Total_subtask: 4,
    subtask_done: 3,
    comment_number: 3,
    pj: 2,
    last_updated: "May 28 2025",
  },
  {
    task_id: 69,
    task_name: "Adding comment on the thing",
    description:
      "our actual code is a mess so current job and do more and more stuff we haven't done yet",
    Total_subtask: 10,
    subtask_done: 4,
    comment_number: 4,
    pj: 1,
    last_updated: "March 31 2025",
  },
  {
    task_id: 69,
    task_name: "Mark all the thing in that thing",
    description:
      "We should do it as soon as possible cause it take a bit longer",
    Total_subtask: 4,
    subtask_done: 0,
    comment_number: 3,
    pj: 2,
    last_updated: "May 28 2025",
  },
  {
    task_id: 69,
    task_name: "Error counting",
    description:
      "Count the number of time we do error do prevent it",
    Total_subtask: 4,
    subtask_done: 3,
    comment_number: 3,
    pj: 2,
    last_updated: "May 28 2025",
  },
];

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
      {
        tasks.map((tache, index)=><TaskCard task={tache} key={index} />)
      }
     
    </div>
  );
}
