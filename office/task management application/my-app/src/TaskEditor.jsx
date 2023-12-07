// TaskEditor.js
import React, { useState } from 'react';

const TaskEditor = ({ task, updateTask }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdateTask = () => {
    if (editedTask.trim() !== '') {
      updateTask(editedTask);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={editedTask}
        onChange={(e) => setEditedTask(e.target.value)}
      />
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default TaskEditor;
