import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../models/model";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }
    },

    updateTodo: (
      state: TodoState,
      action: PayloadAction<{ id: number; todo: string }>
    ) => {
      const { id, todo } = action.payload;
      const todoToUpdate = state.todos.find((todoItem) => todoItem.id === id);
      if (todoToUpdate) {
        todoToUpdate.todo = todo;
      }
    },
    markAsDone: (state: TodoState, action: PayloadAction<number>) => {
      const todoToMark = state.todos.find(
        (todoItem) => todoItem.id === action.payload
      );
      if (todoToMark) {
        todoToMark.isDone = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, updateTodo } =
  todoSlice.actions;
export const store = configureStore({
  reducer: {
    storedList: todoSlice.reducer, // can be any name just used by useSelector hook
  },
});
