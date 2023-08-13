import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Note } from "../models/model";

interface TodoState {
  notes: Note[];
}

const initialState: TodoState = {
    notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state: TodoState, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state: TodoState, action: PayloadAction<number>) => {
      const todoIndex = state.notes.findIndex(
        (note) => note.id === action.payload
      );
      if (todoIndex !== -1) {
        state.notes.splice(todoIndex, 1);
      }
    },

    updateNote: (
      state: TodoState,
      action: PayloadAction<{ id: number; note: string }>
    ) => {
      const { id, note } = action.payload;
      const noteToUpdate = state.notes.find((notecontent) => notecontent.id === id);
      if (noteToUpdate) {
        noteToUpdate.noteContent = note;
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;