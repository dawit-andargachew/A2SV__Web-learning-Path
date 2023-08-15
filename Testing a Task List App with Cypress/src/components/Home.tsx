import React from "react";
import { Form } from "./Form";
import { ShowNote } from "./ShowNote";

export const Home: React.FC = () => {
  return (
    // displays notes adding and note showing components
    <div className=" py-6 ">
      <Form />
      <ShowNote />
    </div>
  );
};
