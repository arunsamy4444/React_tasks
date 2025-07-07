import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email && !password) {
      alert("Type panra lavda");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Email format worng bro");
      return;
    }
    if (password.length < 6) {
      alert("Password must be atleast 6 char bro");
      return;
    }
    alert(`
      Your details da lavda \n
      Email : ${email}\n
      Password : ${password}
    `);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Form</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter ur Email"
      />
      <br></br>
      <br></br>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter ur Password"
      />
      <br></br>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>

      <h5>Ur details bro : </h5>
      <p> Email : ${email}</p>
      <p> Password : ${password}</p>
    </div>
  );
}
