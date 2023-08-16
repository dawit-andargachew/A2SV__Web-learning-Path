import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = [
  { id: "1", content: "solve leetcode", isComplete: false },
  { id: "2", content: "complete daily tasks", isComplete: false },
];

//create slice, with add, delete, update, complete task
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdd: (state, action) => {
      state.push(action.payload);
    },
    taskUpdate: (state, action) => {
      const { id, content, isComplete } = action.payload;
      return state.map((task) => {
        if (task.id === id) {
          return { ...task, content: content };
        }
        return task;
      });
    },
    taskComplete: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
    },
    taskDelete: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { taskAdd, taskUpdate, taskDelete, taskComplete } =
  taskSlice.actions;

export default taskSlice.reducer;
