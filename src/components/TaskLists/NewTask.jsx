import React from "react";

function NewTask({ data }) {
  return (
    <div className="h-full flex-shrink-0 w-[318px] p-5 bg-yellow-500 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 px-3 py-1 text-sm rounded-lg font-semibold">
          {data.priority}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-bold">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-600 py-1 px-2 text-sm">Accept Task</button>
        <button className="bg-red-600 py-1 px-2 text-sm">Reject Task</button>
      </div>
    </div>
  );
}

export default NewTask;
