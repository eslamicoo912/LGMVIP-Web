import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    if (!task.text) return;
    setTodos([task, ...todos]);
  };

  const removeTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTask = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <Form addTask={addTask} />
      <Todo todos={todos} />
    </div>
  );
};

export default List;
