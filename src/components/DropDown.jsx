import React, { useEffect, useRef, useState } from "react";

export default function DropDown() {
  const options = ["OnePiece", "Naruto", "Bleach"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeRef = useRef();
  useEffect(() => {
    const co = (e) => {
      if (closeRef.current && !closeRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", co);
    return () => {
      document.removeEventListener("mousedown", co);
    };
  }, []);
  return (
    <div ref={closeRef}>
      <h1>DropDown</h1>
      <h4 onClick={() => setIsOpen(!isOpen)}>
        {selected || "Click here da lavda"}
      </h4>
      {isOpen &&
        options.map((item) => (
          <div
            onClick={() => {
              setIsOpen(false);
              setSelected(item);
            }}
          >
            <p>{item}</p>
          </div>
        ))}
    </div>
  );
}
