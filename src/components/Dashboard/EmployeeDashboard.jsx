import React from 'react'
import Header from '../Others/Header'
import TasksStatus from '../Others/TasksStatus'
import TaskLists from '../TaskLists/TaskLists'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TasksStatus />
        <TaskLists />
    </div>
  )
}

export default EmployeeDashboard