import React, { useEffect, useState } from "react";

export default function API() {
  const [inp, setInp] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>API Task</h1>
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Enter name to search"
      />

      {users
        .filter((user) => (user.name.toLowerCase().includes(inp.toLowerCase())))

        .map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - {item.email}
            </p>
          </div>
        ))}
    </div>
  );
}
