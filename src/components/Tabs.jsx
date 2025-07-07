import React, { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("Home");
  return (
    <div>
      <h1>Tabs Switch</h1>
      <button onClick={() => setActive("Home")}>Home</button>
      <button onClick={() => setActive("About")}>About</button>
      <button onClick={() => setActive("Contact")}>Contact</button>

      {
        <>
          {active === "Home" && <p>This is Home Tab</p>}
          {active === "About" && <p>This is About Tab</p>}
          {active === "Contact" && <p>This is Conatct Tab</p>}
        </>
      }
    </div>
  );
}
