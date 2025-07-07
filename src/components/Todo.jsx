import React, { useState } from "react";

export default function Todo() {
  const [inp, setInp] = useState("");
  const [todo, setTodo] = useState(() => {
    const stored = localStorage.getItem("todo");
    return stored ? JSON.parse(stored) : [];
  });

  const add = () => {
    const updated = [...todo, inp];
    setTodo(updated);
    localStorage.setItem("todo", JSON.stringify(updated));
    setInp("");
  };

  const edit = (id) => {
    const saved = prompt("enter to edit da lavda", todo[id]);
    if(saved !==null && saved.trim()!==""){
      const updated = [...todo]
      updated[id]=saved
      setTodo(updated)
      localStorage.setItem("todo", JSON.stringify(updated));
    }
  };

  const dlt = (id) => {
    const updated = todo.filter((item,idx)=> idx!==id)
    setTodo(updated)
     localStorage.setItem("todo", JSON.stringify(updated));

  };
  return (
    <div>
      <h1>Todo</h1>
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Enter a task to be add"
      />
      <button onClick={add}>Add</button>

      {todo &&
        todo.map((item, id) => (
          <div key={id}>
            <li>{item}</li>
            <button onClick={() => edit(id)}>Edit</button>
            <button onClick={() => dlt(id)}>dlt</button>
          </div>
        ))}
    </div>
  );
}