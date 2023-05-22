import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import addReducer from './redux/addSlice';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';

const store = configureStore({
  reducer: {
    add: addReducer,
  },
});

const App = () => (
  <Provider store={store}>
    <AddTask />
    <ListTask />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
