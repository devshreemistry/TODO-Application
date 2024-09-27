import React from 'react';

const TaskItem = ({ task, deleteTask, handleEdit }) => {
  return (
    <li>
      <h3>{task.title} (Priority: {task.priority})</h3>
      <p>{task.description}</p>
      <p>Assigned To: {task.assignedTo}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={() => handleEdit(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
