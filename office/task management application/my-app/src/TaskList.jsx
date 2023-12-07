import React from 'react';

const TaskList = ({ tasks, filter }) => {
  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
