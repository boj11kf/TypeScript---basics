import React, { createContext, ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string): void => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return [newTodo, ...prevState];
    });
  };

  const handleDeleteTodo = (id: string): void => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const ctxValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddTodo,
    deleteTodo: handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
