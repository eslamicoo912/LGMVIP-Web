import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [task, setTaks] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTasks([{ id: uuid(), task }, ...tasks]);
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
            type="text"
            value={task}
            onChange={(e) => setTaks(e.target.value)}
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
