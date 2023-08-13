import React from "react";
import { Form } from "./Form";
import { ShowTodo } from "./ShowTodo";

export const Home: React.FC = () => {
  return (
    <div className=" py-6 ">
      {/* <div className="text-5xl font-mono font-semibold text-center text-gray-300 py-3 my-4">
        Taskfiy
      </div> */}
      <Form />

      <ShowTodo />
    </div>
  );
};
