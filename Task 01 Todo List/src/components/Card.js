import React from "react";
import {
  MdOutlineDoneOutline,
  MdEdit,
  MdOutlineDeleteForever,
} from "react-icons/md";

const Card = ({ title, completedClick, editClick, deleteClick }) => {
  return (
    <div className="card">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="btns-container">
        <button className="completed" onClick={completedClick}>
          <MdOutlineDoneOutline />
        </button>
        <button className="edit" onClick={editClick}>
          <MdEdit />
        </button>
        <button className="delete" onClick={deleteClick}>
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default Card;
