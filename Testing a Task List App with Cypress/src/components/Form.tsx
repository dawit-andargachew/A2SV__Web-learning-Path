import React, { useState } from "react";
import { addNote } from "../reducer/reducer";
import { useDispatch } from "react-redux";

export const Form: React.FC = () => {
  
  // stor the current note that is going to added to notes list
  const [note, setNote] = useState<string>("");

  /// helps to call methods on the redux
  const dispath = useDispatch();

  // handles submit -> add a new note to the global state
  const handleOnSubmit = (
    event: React.FormEventHandler<HTMLFormElement> | any
  ) => {
    event.preventDefault();
    dispath(addNote({ id: Date.now(), noteContent: note }));
    setNote("");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="  flex items-center gap-x-10  w-10/12 mx-auto my-5 p-2"
    >
      <button
        type="submit"
        className="items-start text-xl bg-teal-400 h-14 w-2/12 hover:bg-teal-500 text-white font-bold rounded-md px-4 py-2 shadow-md transition-colors duration-300"
      >
        Add Notes
      </button>
      <input
        type="text"
        required
        value={note}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNote(event?.target.value);
        }}
        placeholder="add your note here . . ."
        className="w-8/12 h-14 shadow-xl ring-offset-ld focus:scale-110 ring-white   font-mono text-[#dc774e]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-100"
      />
    </form>
  );
};
