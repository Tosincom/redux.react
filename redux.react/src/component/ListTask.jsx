import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.add.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'not-done') {
      return !task.isDone;
    }
    return true;
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <label>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="not-done">Not Done</option>
          </select>
        </label>
      </div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

export default ListTask;
