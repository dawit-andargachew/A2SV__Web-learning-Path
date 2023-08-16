import React, { useState } from "react";
import { addTodo } from "../reducer/reducers";
import { useDispatch } from "react-redux";

export const Form: React.FC = () => {
  const [todo, setTdodo] = useState<string>("");
  const dispath = useDispatch();

  const handleOnSubmit = (
    event: React.FormEventHandler<HTMLFormElement> | any
  ) => {
    event.preventDefault();
    dispath(addTodo({ id: Date.now(), description: todo, isDone: false }));
    setTdodo("");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className=" flex items-center justify-center gap-x-2  w-10/12 mx-auto my-5 p-2"
    >
      <input
        type="text"
        required
        value={todo}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTdodo(event?.target.value);
        }}
        placeholder="add your task here . . ."
        className=" w-8/12 h-14 shadow-xl ring-offset-ld focus:scale-110 ring-white   rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        id="add-button"
        type="submit"
        // onClick={handleOnClick}
        className="text-xl bg-teal-400 h-14 w-2/12 hover:bg-teal-500 text-white font-bold rounded-r-md px-4 py-2 shadow-md transition-colors duration-300"
      >
        Add task
      </button>
    </form>
  );
};
