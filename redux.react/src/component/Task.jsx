import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from "../redux/addSlice"
const Task = ({ id, description, isDone }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedIsDone, setEditedIsDone] = useState(isDone);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (editedDescription.trim()) {
      dispatch(editTask({ id, description: editedDescription, isDone: editedIsDone }));
      setEditMode(false);
    }
  };

  const handleIsDoneChange = () => {
    setEditedIsDone(!editedIsDone);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={editedIsDone}
              onChange={handleIsDoneChange}
            />
            Done
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <strong>{description}</strong> - {isDone ? 'Done' : 'Not done'}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
