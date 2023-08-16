import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  taskAdd,
  taskUpdate,
  taskDelete,
  taskComplete,
} from "./Reducers/TaskSlice";
import { nanoid } from "@reduxjs/toolkit";
import TaskList from "./components/TaskList";

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [input_task, setInputTask] = useState("");

  return (
    <div className="App rounded-md mt-10 shadow-md w-11/12 bg-slate-300 h-[30rem]  mx-auto">
      <h1 className="pt-10 mt-4 font-mono text-teal-600 text-3xl font-bold">
        Taskify Task Management Tool
      </h1>

      {!tasks && <span>No task yet ...</span>}

      <div className="w-10/12 mx-auto   mt-6">
        <div className="task_input flex justify-center items-center py-2">
          <textarea
            className=" focus:outline-none p-1 border-teal-600 w-8/12 border-2 rounded"
            type="text"
            value={input_task}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
          />
          <button
            className=" bg-teal-600 px-7 rounded-lg py-3 ml-3 text-white"
            onClick={(e) => {
              if (input_task.length > 0) {
                dispatch(
                  taskAdd({
                    id: nanoid(),
                    content: input_task,
                    isComplete: false,
                  })
                );
                setInputTask("");
              }
            }}
          >
            Add Task
          </button>
        </div>
        {/* task list */}
        <div className=" block w-full pt-8 p-3">{tasks && <TaskList tasks={tasks} />}</div>
      </div>
    </div>
  );
}

export default App;
