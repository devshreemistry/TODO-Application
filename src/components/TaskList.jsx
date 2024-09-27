import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, handleEdit }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Description</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{new Date(task.dueDate).toLocaleDateString()}</td>
              <td>{task.priority}</td>
              <td>
                <button onClick={() => handleEdit(task)}style={{ marginRight: '8px' }}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
