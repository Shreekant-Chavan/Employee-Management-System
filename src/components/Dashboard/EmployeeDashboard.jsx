import React from "react";
import Header from "../Others/Header";
import TasksStatus from "../Others/TasksStatus";
import TaskLists from "../TaskLists/TaskLists";

function EmployeeDashboard({ data }) {
  console.log(data);

  return (
    <div id="tasklist" className="p-10 h-screen">
      {/* <Header data={data} /> */}
      <TasksStatus data={data} />
      <TaskLists data={data} />
    </div>
  );
}

export default EmployeeDashboard;
