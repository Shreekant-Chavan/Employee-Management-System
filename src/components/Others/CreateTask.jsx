import React from "react";

function CreateTask() {
  return (
    <div className="p-5 mt-6 rounded bg-[#1C1C1C]">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">
              Task Title
            </h3>
            <input
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">
              Assign to
            </h3>
            <input
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">
              Category
            </h3>
            <input
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-300 mb-1">
            Description
          </h3>
          <textarea
            className="w-full h-48 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Some brief about task..."
            cols={50}
            rows={10}
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg font-semibold mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
