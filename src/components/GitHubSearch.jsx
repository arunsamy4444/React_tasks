import React, { useEffect, useState } from "react";

export default function GitHubSearch() {
  const [inp, setInp] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${inp}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.items || []));
    console.log(users);
  }, [inp]);
  return (
    <div>
      <h1>GitHubSearch Task</h1>
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Enter a useranem to fetch"
      />
      {users &&
        users.map((item) => (
          <div key={item.id}>
            <h3>{item.login}</h3>
            <a href={item.html_url}>Visit Profile</a>
          </div>
        ))}
    </div>
  );
}
