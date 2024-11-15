import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import { getLocalStorage } from "../../utils/LocalStorage";

function TaskLists({ data }) {
  console.log(data);

  // if (!data || !data.tasks) {
  //   return <div>No tasks available</div>; // Show a fallback UI
  // }

  // const EmployeePage = () => {
  //   const {employees} = getLocalStorage()
  //   const currentEmloyee = employees.find((elem) => {
  //     return <h2>No employee Found</h2>
  //   })
  // }

  return (
    <div
      id="tasklist"
      className="flex flex-nowrap items-center justify-start gap-5 h-[55%] w-full py-5 overflow-x-auto mt-10"
    >
      {data.tasks.map((event, idx) => {
        if (event.active) {
          return <AcceptTask key={idx} data={event} />;
        }
        if (event.completedTask) {
          return <CompleteTask key={idx} data={event} />;
        }
        if (event.failedTask) {
          return <FailedTask key={idx} data={event} />;
        }
        if (event.newTask) {
          return <NewTask key={idx} data={event} />;
        }
        return null;
      })}
    </div>
  );
}

export default TaskLists;
