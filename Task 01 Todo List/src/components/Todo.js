import React from "react";
import { MdDelete, MdDone } from "react-icons/md";

const Todo = ({ todos, removeTask, completeTask }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        const { id, text, isCompleted } = todo;
        return (
          <div key={index} className={isCompleted ? "completed" : ""}>
            <div>
              <p>{text}</p>
            </div>
            <div>
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
