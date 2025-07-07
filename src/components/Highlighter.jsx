import React, { useState } from "react";

export default function Highlighter() {
  const [inp, setInp] = useState("");
  const [high, setHigh] = useState(null);

  const para =
    "Next level: Want to highlight partial match? e.g., highlight act in React Or Tailwind it up?";

  const handleSearch = () => {
    if (!inp) return;

    const parts = para.split(new RegExp(`(${inp})`, "gi"));

    const res = parts.map((part, i) =>
      part.toLowerCase() === inp.toLowerCase() ? (
        <span
          key={i}
          style={{
            backgroundColor: "pink",
            fontWeight: "bold",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
    setHigh(res);
    setInp("");
  };

  return (
    <div>
      <h1>Highlighter Tasks</h1>
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Enter a term to search"
      />{" "}
      <button onClick={handleSearch}>Search</button>
         {/* ✅ Show highlighted result if available */}
      <p style={{ marginTop: "20px" }}>{high || para}</p>
    </div>
  );
}
