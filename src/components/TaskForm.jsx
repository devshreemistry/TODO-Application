import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, currentTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setAssignedTo(currentTask.assignedTo);
      setStatus(currentTask.status);
      setDueDate(currentTask.dueDate);
      setPriority(currentTask.priority);
    } else {
      resetForm();
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      id: currentTask ? currentTask.id : Date.now(),
      title,
      description,
      assignedTo,
      status,
      dueDate,
      priority,
    };

    if (currentTask) {
      updateTask(taskData);
    } else {
      addTask(taskData);
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setAssignedTo('');
    setStatus('pending');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        placeholder="Assigned To"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">{currentTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
