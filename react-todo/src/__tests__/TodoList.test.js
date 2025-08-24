import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = screen.getAllByText("Delete")[1];

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
