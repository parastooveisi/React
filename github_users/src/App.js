import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const result = await axios(url);
    setUsers(result.data);
  }, []);

  const renderedUsers = users.map((user) => {
    const { login, id, avatar_url, html_url } = user;
    return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4> {login}</h4>
          <a href={html_url}>profile</a>
        </div>
      </li>
    );
  });

  return (
    <div>
      <h2 align="center">GitHub Users</h2>
      <ul className="rows">{renderedUsers}</ul>
    </div>
  );
}

export default App;
