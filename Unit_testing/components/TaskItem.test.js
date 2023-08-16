import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import { deleteTask, moveTask } from "../store/slices/tasksSlice";

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

  it("removeTask function when delete button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const deleteButton = screen.getAllByTestId("delete-button")[0];
    fireEvent.click(deleteButton);
    const actions = store.getActions();
    expect(actions).toContainEqual(deleteTask(1));
  });

  it("completeTask function when complete button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const completeButton = screen.getAllByTestId("complete-button")[0];
    fireEvent.click(completeButton);
    const actions = store.getActions();
    expect(actions).toContainEqual(moveTask({ id: 1, isDone: true }));
  });

  it("completeTask function when button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const completeButton = screen.getAllByTestId("complete-button")[1];
    fireEvent.click(completeButton);
    const actions = store.getActions();
    expect(actions).toContainEqual(moveTask({ id: 2, isDone: false }));
  });
});
