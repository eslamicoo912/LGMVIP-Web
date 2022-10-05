import React, { useEffect, useState } from "react";

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

  console.log(users);

  return <div>App</div>;
};

export default App;
