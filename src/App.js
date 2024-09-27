// // 

// import React, { useState, useEffect } from 'react';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';
// import './styles/App.css';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [currentTask, setCurrentTask] = useState(null);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   const saveTasksToLocalStorage = (tasks) => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   };

//   const addTask = (task) => {
//     const newTasks = [...tasks, task];
//     setTasks(newTasks);
//     saveTasksToLocalStorage(newTasks);
//   };

//   const updateTask = (updatedTask) => {
//     const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
//     setTasks(updatedTasks);
//     saveTasksToLocalStorage(updatedTasks);
//     setCurrentTask(null); // Reset current task after updating
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//     saveTasksToLocalStorage(updatedTasks);
//   };

//   const handleEdit = (task) => {
//     setCurrentTask(task); // Set the task for editing
//   };

//   return (
//     <div className="app">
//       <h1>To-Do List</h1>
//       <TaskForm addTask={addTask} currentTask={currentTask} updateTask={updateTask} />
//       <TaskList tasks={tasks} deleteTask={deleteTask} handleEdit={handleEdit} />
//     </div>
//   );
// };

// export default App;



// src/App.js

import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
    setShowForm(false); // Close the form after adding
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setCurrentTask(null); // Reset current task after updating
    setShowForm(false); // Close the form after updating
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleEdit = (task) => {
    setCurrentTask(task); // Set the task for editing
    setShowForm(true); // Open the form for editing
  };

  const handleNewTask = () => {
    setCurrentTask(null); // Clear the current task for a new task
    setShowForm(true); // Open the form for a new task
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <button onClick={handleNewTask}>Add Task</button> {/* Button to open the form */}
      {showForm && (
        <TaskForm 
          addTask={addTask} 
          currentTask={currentTask} 
          updateTask={updateTask} 
        />
      )}
      <TaskList tasks={tasks} deleteTask={deleteTask} handleEdit={handleEdit} />
    </div>
  );
};

export default App;
