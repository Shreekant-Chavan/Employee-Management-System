import React from "react";

function TasksStatus({ data }) {
  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-500">
        <h2 className="text-3xl font-semibold">{data.taskSummary.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-500">
        <h2 className="text-3xl text-black font-semibold">
          {data.taskSummary.newTask}
        </h2>
        <h3 className="text-xl text-black font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-500">
        <h2 className="text-3xl font-semibold">
          {data.taskSummary.completedTask}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-500">
        <h2 className="text-3xl font-semibold">
          {data.taskSummary.failedTask}
        </h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TasksStatus;
