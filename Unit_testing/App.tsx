import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import { Task } from "./models/Task";
import InputField from "./components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "./store/slices/tasksSlice";

function App() {
  const tasks = useSelector(({ tasks: { search, data } }: any) => {
    if (search === "completed") {
      return data.filter((task: Task) => task.isDone === true);
    } else if (search === "active") {
      return data.filter((task: Task) => task.isDone === false);
    } else {
      return data;
    }
  });

  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="min-h-[20rem] bg-neutral-400 p-5 m-10 rounded">
      <div className="flex flex-col gap-5">
        <p className="w-full text-center font-mono  text-teal-600 font-bold text-3xl">
          Taskify - Task Management
        </p>

        {/* Add task section */}
        <div className="w-full">
          <InputField todo={todo} setTodo={setTodo} />
        </div>

        {/* Task List section */}
        <div className="flex gap-5">
          <div className="w-1/2  mx-auto bg-gray-200 rounded-md">
            <div className="flex gap-4 p-4">
              <p className="w-full text-2xl text-teal-600 font-mono font-semibold">Tasks</p>
              <select className="outline-none border border-teal-500 mx-2  font-semibold rounded-md text-teal-600 bg-gray-200" name="" id="" onChange={handleChange} role="combobox">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div
              className="py-2 px-8 flex flex-col gap-2"
              data-testid="task-list"
            >
              {tasks.map((todo: Task) => (
                <TaskItem
                  key={todo.id}
                  id={todo.id}
                  description={todo.description}
                  isDone={todo.isDone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
