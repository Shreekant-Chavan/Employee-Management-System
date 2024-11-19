import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import { getLocalStorage } from "../../utils/LocalStorage";

function TaskLists({ data }) {
  console.log(data);

  if (!data || !data.tasks) {
    return <div>No tasks available</div>;
  }

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
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={task} />;
        }
        if (task.completedTask) {
          return <CompleteTask key={idx} data={task} />;
        }
        if (task.failedTask) {
          return <FailedTask key={idx} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} data={task} />;
        }
        return null;
      })}
    </div>
  );
}

export default TaskLists;
