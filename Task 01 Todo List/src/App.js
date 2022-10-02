import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [task, setTask] = useState({ id: null, title: "", completed: false });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask((task) => {
      return {
        ...task,
        id: uuid(),
        [e.target.name]: e.target.value,
      };
    });
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([task, ...tasks]);
    console.log(tasks);
  };

  const deleteClick = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="input-container">
        <form onSubmit={addTask}>
          <input
            name="title"
            type="text"
            value={task.title}
            onChange={handleChange}
          />
          <button className="add" type="submit">
            Add
          </button>
        </form>
      </div>
      <List tasks={tasks} deleteClick={(id) => deleteClick(id)} />
    </div>
  );
};

export default App;
