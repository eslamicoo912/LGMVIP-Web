import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <div>
              <p>{todo.text}</p>
            </div>
            <div>
              <button>
                <MdEdit />
              </button>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
