import React from "react";
import Card from "./Card";

const List = ({ tasks, completedClick, editClick, deleteClick }) => {
  const tasksList = tasks.map((task, index) => {
    return (
      <Card
        key={index}
        title={task}
        completedClick={completedClick}
        editClick={editClick}
        deleteClick={deleteClick}
      />
    );
  });

  return <div>{tasksList}</div>;
};

export default List;
