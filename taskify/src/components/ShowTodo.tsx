import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../models/model";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiFillCheckCircle,
  AiFillSave
} from "react-icons/ai";

interface Props {
  todos: Todo[];
  deleteTask: (id: any) => void;
  markasDone: (id: any) => void;
  updateTask: (id: any, content: string) => void;
}

export const ShowTodo: React.FC<Props> = ({
  todos,
  deleteTask,
  markasDone,
  updateTask,
}: Props) => {
  const [currTodo, setCurrTodo] = useState<Todo | null>(null);
  const todoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currTodo && todoRef.current) {
      todoRef.current.focus();
    }
  }, [currTodo]);

  const handleEditClick = (todo: Todo) => {
    setCurrTodo(todo);
  };

  const handleUpdateClick = () => {
    if (currTodo && todoRef.current) {
      updateTask(currTodo.id, todoRef.current.value);
      setCurrTodo(null);
    }
  };

  return (
    <section className="flex min-h-[20rem] w-full">
      <article className="w-1/2">
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <div
                key={todo.id}
                className="bg-yellow-100 flex justify-center items-center rounded-md w-10/12 mx-auto p-3 my-2 text-xl"
              >
                {currTodo && currTodo.id === todo.id ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      ref={todoRef}
                      className="text-xl  bg-inherit font-semibold outline outline-teal-200 py-1 outline-[3px] rounded-sm text-teal-900 w-7/12 ml-5"
                      defaultValue={currTodo.todo}
                    />
                    <span
                      className="outline ml-6 hover:bg-teal-400 hover:text-white rounded-md outline-lime-bg-teal-400  outline-[2px] text-lime-bg-teal-400 text-teal-500 p-2 m-1 cursor-pointer"
                      onClick={handleUpdateClick}
                    >
                      <AiFillSave />
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span className="text-[#286a85] text-xl font-semibold ml-5">
                      {todo.todo}
                    </span>
                  </div>
                )}

                <p className="flex w-4/12 ml-auto justify-center gap-x-8 items-center">
                  <span
                    className="outline hover:bg-yellow-500 hover:text-[white] rounded-md outline-yellow-500 outline-[2px] text-yellow-500 p-2 m-1 cursor-pointer"
                    onClick={() => handleEditClick(todo)}
                  >
                    <AiOutlineEdit />
                  </span>
                  <span
                    onClick={() => markasDone(todo.id)}
                    className="outline hover:bg-[green] hover:text-white rounded-md outline-[green] outline-[2px] text-[green] p-2 m-1 cursor-pointer"
                  >
                    <AiFillCheckCircle />
                  </span>

                  <span
                    onClick={() => deleteTask(todo.id)}
                    className="outline hover:bg-[red] hover:text-white rounded-md outline-[red] outline-[2px] text-[red] p-2 m-1 cursor-pointer"
                  >
                    <AiOutlineDelete />
                  </span>
                </p>
              </div>
            )
        )}
      </article>

      <article className="w-1/2">
        {todos.map(
          (todo) =>
            todo.isDone && (
              <div
                key={todo.id}
                className="bg-green-400 flex justify-center items-center rounded-md w-10/12 mx-auto p-3 my-2 text-xl"
              >
                <span className="ext-xl font-semibold ml-5"> {todo.todo} </span>
                <p className="flex w-4/12 ml-auto justify-center gap-x-8 items-center">
                  <span
                    onClick={() => deleteTask(todo.id)}
                    className="outline hover:bg-[red] hover:text-white rounded-md outline-[red] outline-[2px] text-[red] p-2 m-1 cursor-pointer"
                  >
                    <AiOutlineDelete />
                  </span>
                </p>
              </div>
            )
        )}
      </article>
    </section>
  );
};
