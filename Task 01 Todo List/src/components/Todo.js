import React from "react";
import { MdDelete, MdDone } from "react-icons/md";
import { IconContext } from "react-icons";

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
              <IconContext.Provider value={{ className: "react-icons" }}>
                <MdDone
                  className="complete-icon"
                  onClick={() => completeTask(id)}
                />
                <MdDelete
                  className="delete-icon"
                  onClick={() => removeTask(id)}
                />
              </IconContext.Provider>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
