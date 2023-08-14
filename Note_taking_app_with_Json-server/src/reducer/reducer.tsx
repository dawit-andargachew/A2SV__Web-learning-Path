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


// export each reducer or function to be accessed by other components
export const { addNote, deleteNote, updateNote } = notesSlice.actions;