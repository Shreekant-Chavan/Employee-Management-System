import React from "react";

function TasksStatus({ data }) {
  console.log("data in TaskStatus", data);

  if (!data || !data.taskSummary) {
    return <div>No task summary available</div>;
  }

  const { active, newTask, completedTask, failedTask } = data.taskSummary;

  return (
    <div className="flex w-full mt-2 justify-between bg-[#1C1C1C] gap-5">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-500">
        <h2 className="text-3xl font-semibold">{active || 0}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-500">
        <h2 className="text-3xl text-black font-semibold">{newTask || 0}</h2>
        <h3 className="text-xl text-black font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-500">
        <h2 className="text-3xl font-semibold">{completedTask || 0}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-500">
        <h2 className="text-3xl font-semibold">{failedTask || 0}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TasksStatus;
