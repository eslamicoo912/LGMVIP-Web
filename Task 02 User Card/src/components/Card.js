import React from "react";

const Card = ({ data }) => {
  return data.map((user, index) => {
    const { id, email, first_name, last_name, avatar } = user;
    return (
      <div className="card" key={index}>
        <div className="img-container">
          <img src={avatar} alt={id} />
        </div>
        <div className="info-container">
          <h3>
            {first_name} {last_name}
          </h3>
          <p>{email}</p>
        </div>
      </div>
    );
  });
};

export default Card;
