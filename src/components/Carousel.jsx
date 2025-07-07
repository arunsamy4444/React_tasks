import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [idx, setIdx] = useState(0);

  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
  ];

  const handleNxt = () => {
    if (idx == images.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };
  const handlePrev = () => {
    if (idx == 0) {
      setIdx(images.length - 1);
    } else {
      setIdx(idx - 1);
    }
  };

  useEffect(()=>{
    const int = setInterval(()=>{
        handleNxt()
    },3000)

    return ()=>clearInterval(int)
  },[idx])

  return (
    <div>
      <h1>Image Carousel ....</h1>
      <img
        src={images[idx]}
        style={{ width: "600px", height: "300px", borderRadius: "10px" }}
      />
      <br />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNxt}>Nxt</button>
    </div>
  );
}
