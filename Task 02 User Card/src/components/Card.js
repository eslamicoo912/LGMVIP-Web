import React from "react";

const Card = ({ data }) => {
  return data.map((user, index) => {
    const { id, email, first_name, last_name, avatar } = user;
    return (
      <div className="card" key={index}>
        <img src={avatar} alt={id} />
        <h3>
          {first_name} {last_name}
        </h3>
        <p>{email}</p>
      </div>
    );
  });
};

export default Card;
