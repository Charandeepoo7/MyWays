import React, { useState } from 'react';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleCreateTask = () => {
    // Implement creating a new task functionality here
  }

  return (
    <div>
      <h2>Task Board</h2>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
      <input type="text" placeholder="Create a new task..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

export default TaskBoard;