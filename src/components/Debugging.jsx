import React, { useEffect, useState } from "react";

export default function Debugging() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs");
    setCount((count)=>count+1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
