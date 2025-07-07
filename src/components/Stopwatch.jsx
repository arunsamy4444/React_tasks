import React, { useRef, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timRef.current = setInterval(() => {
        setSeconds((p) => p + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(timRef.current);
  };

  const reset = () => {
    clearInterval(timRef.current); // stop timer
    setRunning(false);
    setSeconds(0);
  };

  const handleHHMMSS = (sec) => {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
    const min = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const seconds = String(Math.floor(sec % 60)).padStart(2, "0");
    return `${hrs} : ${min} : ${seconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <h5>{handleHHMMSS(seconds)}</h5>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
