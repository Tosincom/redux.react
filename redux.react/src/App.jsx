import React from 'react';
import { useSelector } from 'react-redux';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  const tasks = useSelector((state) => state.add.tasks);

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <ListTask tasks={tasks} />
    </div>
  );
};

export default App;
