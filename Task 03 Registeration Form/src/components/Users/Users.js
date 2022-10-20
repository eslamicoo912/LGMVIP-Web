import React from "react";
import "./Users.css";

const Users = ({ users, html, css, js }) => {
  const list = users.map((user, index) => {
    const { username, email, website, img } = user;
    return (
      <div key={index} className="card">
        <div className="info-container">
          <h2>{username}</h2>
          <h3>{email}</h3>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </div>
        <div className="img-container">
          <img alt="img" src={img} />
        </div>
        <div className="skills">
          {html && <p>Html</p>}
          {css && <p>Css</p>}
          {js && <p>Javascript</p>}
        </div>
      </div>
    );
  });

  return <div>{list}</div>;
};

export default Users;
