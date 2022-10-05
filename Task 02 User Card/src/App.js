import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const URL = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const { data: usersData } = data;
    setUsers(usersData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="app">
      <h1>Hello, users</h1>
      <Card data={users} />
    </div>
  );
};

export default App;
