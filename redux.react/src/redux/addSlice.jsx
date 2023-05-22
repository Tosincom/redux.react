import { createSlice } from '@reduxjs/toolkit';

const addSlice = createSlice({
  name: 'add',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
        task.isDone = isDone;
      }
    },
  },
});

export const { addTask, editTask } = addSlice.actions;
export default addSlice.reducer;
