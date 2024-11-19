import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTasks() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployee = JSON.parse(localStorage.getItem("employees"));
    setEmployees(storedEmployee || []);
  }, []);

  return (
    <div id="tasklist" className="bg-[#1C1C1C] p-5 mt-5 rounded ">
      <div className="bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 font-semibold text-center">Employee Name</h2>
        <h3 className="w-1/5 font-semibold text-center">New Task</h3>
        <h5 className="w-1/5 font-semibold text-center">Active Task</h5>
        <h5 className="w-1/5 font-semibold text-center">Completed Task</h5>
        <h5 className="w-1/5 font-semibold text-center">Failed Task</h5>
      </div>

      <div className="">
        {employees.map((event, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="w-1/5 text-center font-semibold text-base text-white-600">
              {event.firstName}
            </h2>
            <h3 className="w-1/5 text-center font-semibold text-base text-blue-600">
              {event.taskSummary.newTask}
            </h3>
            <h5 className="w-1/5 text-center font-semibold text-base text-yellow-400">
              {event.taskSummary.active}
            </h5>
            <h5 className="w-1/5 text-center font-semibold text-base text-green-600">
              {event.taskSummary.completedTask}
            </h5>
            <h5 className="w-1/5 text-center font-semibold text-base text-red-600">
              {event.taskSummary.failedTask}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTasks;
