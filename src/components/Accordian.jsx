import React, { useEffect, useRef, useState } from "react";

export default function Accordian() {
  const [idx,setIdx] = useState(null)
  const clickRef = useRef(null)
  const accordionData = [
    {
      title: "What is React?",
      content: "React is a front-end library for building UI.",
    },
    {
      title: "Why use React?",
      content: "Because it's fast and component-based.",
    },
    {
      title: "What is useState?",
      content: "It's a React Hook for managing state in functional components.",
    },
  ];
  console.log(idx);
  useEffect(()=>{
    const handleClick = (e)=>{
      if(clickRef.current && clickRef.current.contains(e.target)){
        setIdx(null)
      }
    }
    document.addEventListener('mousedown',handleClick)
    return ()=> document.removeEventListener('mousedown',handleClick)

  },[])

  return (
    <div ref={clickRef}>
      <h1 >Accordian Task</h1>
      {accordionData.map((item,id)=>(
        <div key={id}  >
          <h4 onClick={()=>setIdx(id)}>{item.title}</h4>
          {idx ===id && <p>{item.content}</p>}
          </div>
      ))}
    </div>
  );
}
