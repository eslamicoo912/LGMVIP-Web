import React from "react";
import { MdDelete, MdDone } from "react-icons/md";

const Todo = ({ todos, removeTask, completeTask }) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        const { id, text, isCompleted } = todo;
        return (
          <div key={index} className={isCompleted ? "completed task" : "task"}>
            <div className="text-container">
              <p>{text}</p>
            </div>
            <div className="icons-container">
              <MdDone onClick={() => completeTask(id)} />
              <MdDelete onClick={() => removeTask(id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
