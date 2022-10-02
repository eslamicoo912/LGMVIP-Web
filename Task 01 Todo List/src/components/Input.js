import React, { useState } from "react";

const Input = ({ addTask }) => {
  const [task, setTaks] = useState("");

  return (
    <div className="input-container">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTaks(e.target.value)}
        />
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default Input;
