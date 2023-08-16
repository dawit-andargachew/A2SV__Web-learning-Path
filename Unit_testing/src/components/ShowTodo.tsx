import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../models/model";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiFillCheckCircle,
  AiFillSave,
} from "react-icons/ai";
import { deleteTodo, updateTodo, markAsDone } from "../reducer/reducers";
import { useDispatch, useSelector } from "react-redux";

// todos,

export const ShowTodo: React.FC = () => {
  const [currTodo, setCurrTodo] = useState<Todo | null>(null);
  const todoRef = useRef<HTMLInputElement>(null);

  //  helps to set the focus  when edit button is clicked
  // simple make the cursor on the input field when the button is clicked
  useEffect(() => {
    if (currTodo && todoRef.current) {
      todoRef.current.focus();
    }
  }, [currTodo]);

  const dispath = useDispatch();

  //set the `setCurrTodo` so that the useEffect hook will run and
  // 1. the input field hold the current todo value   2. the cursor focus will be set
  const handleEditClick = (todo: Todo) => {
    setCurrTodo(todo);
  };

  // make the todo to be updated with its id
  const handleUpdateClick = () => {
    console.log(todoRef.current?.value);
    console.log(currTodo);

    if (currTodo && todoRef.current) {
      dispath(updateTodo({ id: currTodo.id, todo: todoRef.current.value }));
      setCurrTodo(null);
    }
  };

  // get the list of states from the redux state
  const todoList = useSelector((state: any) => state.storedList.todos);

  return (
    <section className="flex min-h-[20rem] w-full">
      <article className="w-1/2">
        {todoList.map(
          (todo: Todo) =>
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
                      // required
                      className="text-xl  bg-inherit font-semibold outline outline-teal-200 py-1 outline-[3px] rounded-sm text-teal-900 w-7/12 ml-5"
                      defaultValue={currTodo.description}
                    />
                    <span
                      className="outline ml-6 hover:bg-teal-400 hover:text-white rounded-md outline-lime-bg-teal-400  outline-[2px] text-lime-bg-teal-400 text-teal-500 p-2 m-1 cursor-pointer"
                      onClick={() => handleUpdateClick()}
                    >
                      <AiFillSave />
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span id="show-text" className="text-[#286a85] text-xl font-semibold ml-5">
                      {todo.description}
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
                    onClick={() => dispath(markAsDone(todo.id))}
                    className="outline hover:bg-[green] hover:text-white rounded-md outline-[green] outline-[2px] text-[green] p-2 m-1 cursor-pointer"
                  >
                    <AiFillCheckCircle />
                  </span>

                  <span
                    onClick={() => dispath(deleteTodo(todo.id))}
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
        {todoList.map(
          (todo: Todo) =>
            todo.isDone && (
              <div
                key={todo.id}
                className="bg-green-400 flex justify-center items-center rounded-md w-10/12 mx-auto p-3 my-2 text-xl"
              >
                <span className="ext-xl font-semibold ml-5"> {todo.description} </span>
                <p className="flex w-4/12 ml-auto justify-center gap-x-8 items-center">
                  <span
                    onClick={() => dispath(deleteTodo(todo.id))}
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
