import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [countCompleted, setCountCompleted] = useState(0);

  const addTask = (task) => {
    if (!task.text) return;
    setTodos([task, ...todos]);
  };

  const removeTask = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        if (todo.isCompleted) {
          setCountCompleted((counter) => counter - 1);
        }
      }
      return todo;
    });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTask = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        if (!todo.isCompleted) {
          setCountCompleted((counter) => counter + 1);
        }
      }
      return todo;
    });
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="list">
      <Form addTask={addTask} />
      <Todo todos={todos} removeTask={removeTask} completeTask={completeTask} />
      <p>Done: {countCompleted}</p>
    </div>
  );
};

export default List;
