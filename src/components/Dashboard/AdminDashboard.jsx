import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTasks from "../Others/AllTasks";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-7">
      {/* <Header /> */}
      <CreateTask />
      <AllTasks />
    </div>
  );
}

export default AdminDashboard;
