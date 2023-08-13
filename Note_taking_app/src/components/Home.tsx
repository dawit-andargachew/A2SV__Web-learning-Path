import React from "react";
import { Form } from "./Form";
import { ShowTodo } from "./ShowTodo";

export const Home: React.FC = () => {
  return (
    // displays notes adding and note showing components
    <div className=" py-6 ">
      <Form />
      <ShowTodo />
    </div>
  );
};
