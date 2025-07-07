import React, { useState } from "react";

export default function FizzBuzz() {
  const [inp, setInp] = useState("");
  const [res, setRes] = useState("");

  const handleSubmit = () => {
    const num = parseInt(inp);
    if (isNaN(num)) {
      alert("enter the number da lavda");
    } else if (num % 3 === 0 && num % 5 === 0) {
      alert("Its fizzbuzzzz");
    } else if (num % 3 === 0) {
      alert("Its fizz");
    } else if (num % 5 === 0) {
      alert("Its buzzzz");
    }
    setInp("");
  };
  return (
    <div>
      <h1>FizzBuzz Tasks</h1>
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Enter da lavda"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
