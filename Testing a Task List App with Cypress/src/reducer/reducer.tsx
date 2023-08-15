import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Note } from "../models/model";

// interface for the global list of notes
interface TodoState {
  notes: Note[];
}

/// initial state, just empty array
const initialState: TodoState = {
  notes: [],
};

// reduces to interact with the global state
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotesFromBackEnd: (state: TodoState, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
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
      action: PayloadAction<{ id: number; newbody: string }>
    ) => {
      const { id, newbody } = action.payload;
      const noteToUpdate = state.notes.find(
        (newNote) => newNote.id === id
      );
      if (noteToUpdate) {
        noteToUpdate.body = newbody;
      }
    },
  },
});

// export each reducer or function to be accessed by other components
export const { setNotesFromBackEnd, addNote, deleteNote, updateNote } = notesSlice.actions;
