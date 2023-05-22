import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/addSlice';

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
