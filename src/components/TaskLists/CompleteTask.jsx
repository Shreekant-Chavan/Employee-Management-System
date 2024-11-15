import React from "react";

function CompleteTask({ data }) {
  return (
    <div className="h-full flex-shrink-0 w-[318px] p-5 bg-green-500 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 px-3 py-1 text-sm rounded-lg font-semibold">
          {data.priority}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-bold">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-600 w-full py-1 px-2 text-sm">
          Mark as Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
