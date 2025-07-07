import React, { useState } from "react";

export default function SortableTable() {
  const [data, setData] = useState([
    { id: 1, name: "Arun", age: 21 },
    { id: 2, name: "Bala", age: 23 },
    { id: 3, name: "Kavi", age: 20 },
  ]);

  const ascnameSort = () => {
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sorted);
    console.log(data);
  };

  const dscnameSort = () => {
    const sorted = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setData(sorted);
    console.log(data);
  };

  const ascageSort = () => {
    const sorted = [...data].sort((a, b) => a.age - b.age);
    setData(sorted);
  };

  const dscageSort = () => {
    const sorted = [...data].sort((a, b) => b.age - a.age);
    setData(sorted);
  };

  const ageSort = () => {};
  return (
    <div>
      <h1>SortableTable</h1>
      <table border="1" cellPadding="10">
        <thead>
          <th>Id</th>
          <th>
            Name <button onClick={ascnameSort}>AscSort</button>
            <button onClick={dscnameSort}>DscSort</button>
          </th>

          <th>
            Age
            <button onClick={ascageSort}>AscSort</button>
            <button onClick={dscageSort}>DscSort</button>
          </th>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
