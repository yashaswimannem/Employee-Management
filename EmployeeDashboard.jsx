import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* Display Header with user details */}
      <Header changeUser={props.changeUser} data={props.data} />
      
      {/* Task List Numbers - Displaying some stats or numbers related to tasks */}
      <TaskListNumbers data={props.data} />
      
      {/* Task List - List of tasks assigned to the employee */}
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
