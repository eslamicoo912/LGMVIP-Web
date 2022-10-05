import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const URL = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const { data: usersData } = data;
    setUsers(usersData);
  };

  return (
    <div className="app">
      <header>
        <h1>Hello, users</h1>
        <button onClick={fetchData}>Get Users</button>
      </header>

      <div className="list">
        <Card data={users} />
      </div>
    </div>
  );
};

export default App;
