import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureMockStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import { changeSearchTerm } from "./store/slices/tasksSlice";

const mockStore = configureMockStore();
const initialState = {
  tasks: {
    data: [
      { id: 1, description: "Task 1", isDone: false },
      { id: 2, description: "Task 2", isDone: false },
      { id: 3, description: "Task 3", isDone: true },
    ],
    search: "",
  },
};
const store = mockStore(initialState);

describe("App Component", () => {
  it("renders the application taskify", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const headerText = screen.getByText("Taskify - Task Management");
    expect(headerText).toBeInTheDocument();
  });

  it("renders the application with task list", () => {
    render(
      <Provider
        store={mockStore({
          tasks: {
            data: [
              {
                id: 1,
                description: "asdsadas",
                isDone: false,
              },
              {
                id: 2,
                description: "asdsadfgsdlkfnsdknfas",
                isDone: false,
              },
            ],
            search: "",
          },
        })}
      >
        <App />
      </Provider>
    );

    const taskList = screen.getByTestId("task-list");
    expect(taskList).toBeInTheDocument();
  });

  it("renders the application with correct number of task items", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const taskItems = await screen.findAllByRole("task-item");
    const tasksLength = initialState.tasks.data.length;

    expect(taskItems).toHaveLength(tasksLength);
  });

  it("filters the application based on the search term when search term is active tasks", async () => {
    const is = {
      tasks: {
        data: [
          { id: 1, description: "Task 1", isDone: false },
          { id: 2, description: "Task 2", isDone: false },
          { id: 3, description: "Task 3", isDone: true },
        ],
        search: "active",
      },
    };

    render(
      <Provider store={mockStore(is)}>
        <App />
      </Provider>
    );

    const taskItems = await screen.findAllByRole("task-item");

    expect(taskItems).toHaveLength(2);
  });

  it("dispatches the changeSearchTerm action when dropdown value changes", async () => {
    const store = mockStore({
      tasks: {
        data: [],
        search: "",
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const dropdown = screen.getByRole("combobox");
    const action = store.getActions();
    userEvent.selectOptions(dropdown, "active");

    expect(action).toContainEqual(changeSearchTerm("active"));

    userEvent.selectOptions(dropdown, "completed");
    expect(action).toContainEqual(changeSearchTerm("completed"));
  });

  it("filters the application based on the search term when search term is completed tasks", async () => {
    const is = {
      tasks: {
        data: [
          { id: 1, description: "Task 1", isDone: false },
          { id: 2, description: "Task 2", isDone: false },
          { id: 3, description: "Task 3", isDone: true },
        ],
        search: "completed",
      },
    };

    render(
      <Provider store={mockStore(is)}>
        <App />
      </Provider>
    );

    const taskItems = await screen.findAllByRole("task-item");

    expect(taskItems).toHaveLength(1);
  });
});
