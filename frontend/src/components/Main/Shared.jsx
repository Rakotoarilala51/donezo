import React from "react";

import { SharedPageHeader } from "../Headers/SharedPageHeader";
import Todo from "../Tasks/Todo";
import OnProgress from "../Tasks/OnProgress";
import NeedReview from "../Tasks/NeedReview";
import Done from "../Tasks/Done";

function Shared() {
  return (
    <div>
      <SharedPageHeader />
      <div className="bg-stone-200 border border-stone-300 rounded-xl min-h-screen p-3 m-2 flex justify-between space-x-2">
        <Todo />
        <OnProgress />
        <NeedReview />
        <Done />
      </div>
    </div>
  );
}

export default Shared;
