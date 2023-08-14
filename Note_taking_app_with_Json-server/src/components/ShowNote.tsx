import React, { useEffect, useRef, useState } from "react";
import { Note } from "../models/model";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import {
  deleteNote,
  updateNote,
  setNotesFromBackEnd,
} from "../reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const ShowNote: React.FC = () => {
  // helps to edit a given specific note
  const [currNote, setCurrNote] = useState<Note | null>(null); // mainly store the note id and
  const noteRef = useRef<HTMLTextAreaElement>(null); // mainly stores the updated content

  // when the edit button is clicked noteRef will be initialized here
  useEffect(() => {
    if (currNote && noteRef.current) {
      noteRef.current.focus();
    }
  }, [currNote]);

  // fetch notes from backend and set to the global states
  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        dispatch(setNotesFromBackEnd(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // helps to call reducers methods to change states
  const dispatch = useDispatch();

  // grab list of notes stored on redux
  const notesList = useSelector((state: any) => state.storedList.notes);

  // when edit button is clicked, `currNote` is set and which intern invokes  the above `useEffect` hook and `noteRef` will be initialized
  const handleEditClick = (note: Note) => {
    setCurrNote(note);
  };

  // helps to update a specific note
  const handleUpdateClick = () => {
    if (currNote && noteRef.current) {
      // sends update request for the specific id
      axios
        .put(`http://localhost:3001/notes/${currNote.id}`, {
          body: noteRef.current.value,
        })
        .then((response) => {
          // if the update request is successful, the global state will be updated
          dispatch(
            updateNote({ id: response.data.id, newbody: response.data.body })
          );
        })
        .catch((error) => {
          console.log(error.message);
        });

      setCurrNote(null);
    }
  };

  // helps to delete a specific note
  const handleDeleteClick = (id: number) => {
    axios
      .delete(`http://localhost:3001/notes/${id}`)
      .then((response) => {
        // if the delete request is successful, the global state will be updated
        dispatch(deleteNote(id));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className=" rounded-lg bg-[#dbdbdb] flex flex-wrap  gap-x-3 gap-y-2 min-h-[30rem] w-10/12 mx-auto">
      {/* display all notes stored on redux global state */}
      {notesList.map((note: Note) => (
        <div
          key={note.id}
          className={` ${
            currNote && note.id === currNote.id ? "bg-[#f7895d] " : " "
          }  bg-[#e6ae52] focus:outline-none focus:bg-[#dc774e] px-1 m-2 h-[15rem] w-[15rem] flex  flex-col rounded-lg justify-center items-center relative`}
        >
          {/* invokes delete  */}
          <button
            className="absolute top-[2px] right-[2px] bg-[red] px-2 py-1 rounded-md text-white"
            onClick={() => handleDeleteClick(note.id)}
          >
            <AiOutlineDelete />
          </button>

          {/* display a textarea with edit option so that the note content can be edited */}
          {currNote && currNote.id === note.id ? (
            <textarea
              ref={noteRef}
              defaultValue={note.body}
              className="bg-inherit focus:outline-none   w-[14.6rem] h-[11.5rem] rounded-lg mx-auto p-1 pt-2 resize-none"
            ></textarea>
          ) : (
            <textarea
              value={note.body}
              className="bg-[#e6ae52]  focus:outline-none w-[14.6rem] h-[12rem] rounded-lg mx-auto p-1 pt-2 resize-none"
              readOnly
            ></textarea>
          )}
          <div className="w-11/12 flex justify-end mt-1  mx-auto ">
            {currNote && currNote.id === note.id ? (
              // invokes update note
              <button
                className="px-4 rounded-md text-white"
                onClick={handleUpdateClick}
              >
                <VscSaveAs className="text-black text-xl font-bold" />
              </button>
            ) : (
              // invokes edit functinality which inturn invokes useEffect hooks
              // and the above text area with edit option will be displayed
              <button
                className=" px-4  rounded-md text-white"
                onClick={() => handleEditClick(note)}
              >
                <AiOutlineEdit className="text-xl text-black" />
              </button>
            )}
          </div>
        </div>
      ))}

      {/* if there is no note or the noteList is emmpy, shows this message */}
      {!notesList ||
        (notesList.length === 0 && (
          <div className="w-full  flex justify-center items-center">
            <p className="text-center text-5xl font-mono font-semibold text-gray-500">
              Nothing to show yet. <br /> Add a note to get started.
            </p>
          </div>
        ))}
    </section>
  );
};
