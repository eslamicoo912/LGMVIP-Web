import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const URL = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState("null");

  const fetchData = async () => {
    setLoading("true");
    const response = await fetch(URL);
    const data = await response.json();
    const { data: usersData } = data;
    setUsers(usersData);
    setTimeout(() => {
      setLoading("null");
    }, 1000);
  };

  if (loading === "true") return <h1 className="loading">Loading...</h1>;

  return (
    <div className="app">
      <header>
        <h1>Eslam Ashraf | Users Task</h1>
        <button onClick={fetchData}>Get Users</button>
      </header>

      <div className="list">
        <Card data={users} />
      </div>
    </div>
  );
};

export default App;
