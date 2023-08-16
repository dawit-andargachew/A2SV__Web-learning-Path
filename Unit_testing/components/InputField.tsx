import React from "react";
import { Props } from "../models/Props";
import { Task } from "../models/Task";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/tasksSlice";

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todo) {
      const newTodo: Task = {
        id: Date.now(),
        description: todo,
        isDone: false,
      };

      dispatch(addTask(newTodo));

      setTodo("");
    }
  };

  return (
    // Input section
    <div className=" bg-white p-1  w-8/12 mx-auto rounded-lg">
      <div className="w-full flex rounded-full pl-4">
        <input
          type="text"
          className="flex-auto text-lg focus:outline-none"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        {/* submit button */}
        <button
          onClick={handleAdd}
          className="h-12 font-mono font-semibold rounded-lg px-10 text-center bg-gray-500 text-lg text-white shadow-xl"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default InputField;
