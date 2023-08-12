import React, { useState } from "react";
import { Form } from "./Form";
import { Todo } from "../models/model";
import { ShowTodo } from "./ShowTodo";

export const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // cons

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const deleteTask = (id: any) => {
    const taskList = todos.filter((item) => item.id !== id);
    setTodos(taskList);
  };
  const markasDone = (id: any) => {
    const taskList = todos.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );
    setTodos(taskList);
  };

  const updateTask = (id: any, content: string) => {
    const taskList = todos.map((item) =>
      item.id === id ? { ...item, todo: content } : item
    );
    setTodos(taskList);
  };

  console.log(todos);

  return (
    <div className=" m-4 p-2 ">
      <div className="text-5xl font-mono font-semibold text-center text-gray-300 py-3 my-4">
        Taskfiy
      </div>
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <ShowTodo
        todos={todos}
        deleteTask={deleteTask}
        markasDone={markasDone}
        updateTask={updateTask}
      />
    </div>
  );
};
