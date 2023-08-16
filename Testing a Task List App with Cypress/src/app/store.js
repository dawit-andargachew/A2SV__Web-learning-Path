import { configureStore } from '@reduxjs/toolkit';
import tasksReducer  from '../Reducers/TaskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
});
