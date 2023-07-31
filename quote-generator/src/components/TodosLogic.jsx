import { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodosList";
import { TodosProvider } from "../context/TodosContext";

const TodosLogic = () => {
  return (
    <TodosProvider>
      <InputTodo />
      <TodoList  />
      </TodosProvider>
  );
};
export default TodosLogic;
