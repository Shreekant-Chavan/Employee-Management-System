import React, { useState } from "react";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssign, setTaskAssign] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // const task = {
    //   taskTitle,
    //   taskDate,
    //   taskAssign,
    //   taskCategory,
    //   taskDescription,
    //   newTask: true,
    //   active: false,
    //   completedTask: false,
    //   failedTask: false,
    // };

    const assignTaskToEmployee = (task, employeeName) => {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      const updatedEmployees = employees.map((employee) => {
        if (employee.firstName == employeeName) {
          employee.tasks.push(task);
          console.log(employee.tasks);

          employee.taskSummary.newTask =
            (employee.taskSummary.newTask || 0) + 1;
        }

        return employee;
      });
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    // const data = JSON.parse(localStorage.getItem("employees"))
    // console.log(data);

    // data.forEach((elem) => {
    //   if (taskAssign == elem.firstName) {
    //     elem.tasks.push(newTask)
    //     console.log(elem);
    //   }
    // })

    // console.log(taskTitle, taskDate, taskAssign, taskCategory, taskDescription);
    setTaskTitle("");
    setTaskDate("");
    setTaskAssign("");
    setTaskCategory("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 mt-6 rounded bg-[#1C1C1C]">
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(event) => {
                setTaskTitle(event.target.value);
              }}
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(event) => {
                setTaskDate(event.target.value);
              }}
              className="text-sm mb-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">
              Assign to
            </h3>
            <input
              value={taskAssign}
              onChange={(event) => {
                setTaskAssign(event.target.value);
              }}
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
              value={taskCategory}
              onChange={(event) => {
                setTaskCategory(event.target.value);
              }}
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
            value={taskDescription}
            onChange={(event) => {
              setTaskDescription(event.target.value);
            }}
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
