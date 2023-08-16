import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import { addTask } from "../store/slices/tasksSlice";

describe("App component", () => {
  const initialState = {
    tasks: {
      data: [
        {
          id: 1,
          description: "Test Task 1",
          isDone: false,
        },
        {
          id: 2,
          description: "Test Task 2",
          isDone: true,
        },
      ],
      search: "",
    },
  };

  const mockStore = configureStore([]);
  const store = mockStore(initialState);

  it("addTask action when search buttont", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText("Enter a task");
    const addButton = screen.getByText("Search");

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    const actions = store.getActions();
    expect(actions).toContainEqual(
      addTask({
        id: expect.any(Number),
        description: "New Task",
        isDone: false,
      })
    );
  });

  it("does not dispatch addTask when search button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const addButton = screen.getByText("Search");

    const prevActions = store.getActions();

    fireEvent.click(addButton);

    const actions = store.getActions();
    expect(actions).toEqual(prevActions);
  });

  // Similar test for the backward button
});
