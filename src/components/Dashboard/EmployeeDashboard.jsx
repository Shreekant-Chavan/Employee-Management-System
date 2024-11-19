import React, { useEffect, useState } from "react";
import Header from "../Others/Header";
import TasksStatus from "../Others/TasksStatus";
import TaskLists from "../TaskLists/TaskLists";

function EmployeeDashboard({ data }) {
  console.log(data);

  const [tasks, setTasks] = useState(data?.tasks || []);
  const [taskSummary, setTaskSummary] = useState({
    active: 0,
    newTask: 0,
    completedTask: 0,
    failedTask: 0,
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser?.data) {
      const updatedEmployees =
        JSON.parse(localStorage.getItem("employees")) || [];
      const newUpdatedEmployee = updatedEmployees.find(
        (employee) => employee.email == loggedInUser.data.email
      );
      if (newUpdatedEmployee) {
        setTasks(newUpdatedEmployee.tasks);
      }
    }
  }, []);

  useEffect(() => {
    const active = tasks.filter((task) => task.active).length;
    const newTask = tasks.filter((task) => task.newTask).length;
    const completedTask = tasks.filter((task) => task.completedTask).length;
    const failedTask = tasks.filter((task) => task.failedTask).length;

    setTaskSummary({ active, newTask, completedTask, failedTask });
  }, [tasks]);

  useEffect(() => {
    console.log("Current task in Employee Dashboard", tasks);
  }, [tasks]);

  return (
    <div id="tasklist" className="p-10 h-screen">
      {/* <Header data={data} /> */}
      <TasksStatus data={{ taskSummary }} />
      <TaskLists data={{ tasks }} />
    </div>
  );
}

export default EmployeeDashboard;
