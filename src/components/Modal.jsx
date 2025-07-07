import React, { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modelRef.current && !modelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
      const handleESC = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleESC);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleESC);
    };
  }, []);

  return (
    <div >
      <h1>Modal Task Bro</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Open bro</button>
      {isOpen && (
        <div ref={modelRef}>
          <h4>Anime </h4>
          <li>One Piece</li>
          <li>Naruto</li>
          <li>Bleach</li>
          <button onClick={() => setIsOpen(false)}>Close bro</button>
        </div>
      )}
    </div>
  );
}
