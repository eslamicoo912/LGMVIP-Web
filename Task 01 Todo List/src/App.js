import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  const [task, setTaks] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTasks([task, ...tasks]);
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
      <List tasks={tasks} />
    </div>
  );
};

export default App;
