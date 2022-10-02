import React from "react";
import Card from "./Card";

const List = ({ tasks, completedClick, editClick, deleteClick }) => {
  const tasksList = tasks.map((task, index) => {
    return (
      <Card
        key={index}
        id={task.id}
        title={task.task}
        completedClick={(id) => completedClick(id)}
        deleteClick={(id) => deleteClick(id)}
        editClick={editClick}
      />
    );
  });

  return <div className="list">{tasksList}</div>;
};

export default List;
