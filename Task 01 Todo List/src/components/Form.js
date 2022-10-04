import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: uuid(),
      text: input,
      isCompleted: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="type your task"
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
