import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { addTodo } from "../reducer/reducers";
import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import { Form } from "./Form";

describe("Add todo test", () => {
  it("should dispatch addTodo action when button is clicked", () => {
    const initialState = {
      todos: [
        {
          id: 1,
          description: "Test Task 1",
          isDone: false,
        },
        {
          id: 2,
          description: "Test Task 2",
          isDone: false,
        },
      ],
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "add your task here . . ."
    );
    const addButton = screen.getByTestId("add-button"); // Get button by test id

    fireEvent.change(inputElement, { target: { value: "New Task is added" } });
    fireEvent.click(addButton);

    const actions = store.getActions();
    expect(actions).toContainEqual(
      addTodo({
        id: expect.any(Number),
        description: "New Task",
        isDone: false,
      })
    );
  });
});
