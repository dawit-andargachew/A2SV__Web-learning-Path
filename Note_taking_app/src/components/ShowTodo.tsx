import React, { useEffect, useRef, useState } from "react";
import { Note } from "../models/model";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { deleteNote, updateNote } from "../reducer/reducer";
import { useDispatch, useSelector } from "react-redux";

export const ShowTodo: React.FC = () => {
  const [currNote, setCurrNote] = useState<Note | null>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (currNote && noteRef.current) {
      noteRef.current.focus();
    }
  }, [currNote]);

  const dispatch = useDispatch();
  const notesList = useSelector((state: any) => state.storedList.notes);

  const handleEditClick = (note: Note) => {
    setCurrNote(note);
  };

  const handleUpdateClick = () => {
    if (currNote && noteRef.current) {
      dispatch(updateNote({ id: currNote.id, note: noteRef.current.value }));
      setCurrNote(null);
    }
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteNote(id));
  };

  return (
    <section className=" rounded-lg bg-[#dbdbdb] flex flex-wrap  gap-x-3 gap-y-2 min-h-[30rem] w-10/12 mx-auto">
      {notesList.map((note: Note) => (
        <div
          key={note.id}
          className={` ${
            currNote && note.id === currNote.id ? "bg-[#f7895d] " : " "
          }  bg-[#e6ae52] focus:outline-none focus:bg-[#dc774e] px-1 m-2 h-[15rem] w-[15rem] flex  flex-col rounded-lg justify-center items-center relative`}
        >
          <button
            className="absolute top-[2px] right-[2px] bg-[red] px-2 py-1 rounded-md text-white"
            onClick={() => handleDeleteClick(note.id)}
          >
            <AiOutlineDelete />
          </button>
          {currNote && currNote.id === note.id ? (
            <textarea
              ref={noteRef}
              defaultValue={note.noteContent}
              className="bg-inherit focus:outline-none   w-[14.6rem] h-[11.5rem] rounded-lg mx-auto p-1 pt-2 resize-none"
            ></textarea>
          ) : (
            <textarea
              value={note.noteContent}
              className="bg-[#e6ae52]  focus:outline-none w-[14.6rem] h-[12rem] rounded-lg mx-auto p-1 pt-2 resize-none"
              readOnly
            ></textarea>
          )}
          <div className="w-11/12 flex justify-end mt-1  mx-auto ">
            {currNote && currNote.id === note.id ? (
              <button
                className="px-4 rounded-md text-white"
                onClick={handleUpdateClick}
              >
                <VscSaveAs className="text-black text-xl font-bold" />
              </button>
            ) : (
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
