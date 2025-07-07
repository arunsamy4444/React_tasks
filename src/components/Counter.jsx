// import React,{useReducer} from 'react'

// function reducer(state,action){
//   switch(action.type){
//     case 'INC':
//       return state+1;
//     case 'DEC':
//       return state-1;
//     case "RES":
//       return state=0
//     default:
//       return 0
//   }

// }

// export default function Counter() {
//   const [count,dispatch] = useReducer(reducer,0)
//   return (
//     <div>
//       <h1>Counter, Count of :{count}</h1>
//       <button onClick={() =>dispatch({type : 'INC'})}>+</button>
//       <button onClick={() =>dispatch({type : 'DEC'})}>-</button>
//       <button onClick={() =>dispatch({type : 'RES'})}>Reset</button>
//     </div>
//   )
// }




import React, { useState } from 'react'

export default function Counter() {
  const [count,setCount] = useState(0)
  const add = () =>{
    setCount(count+1)
  }
   const sub = () =>{
    setCount(count-1)
  }
   const res = () =>{
    setCount(0)
  }
  return (
    <div>
      <h1>Counter task</h1>
      <h4>Count of : {count}</h4>
      <button onClick={add}>+</button>
      <button onClick={res}>Reset</button>
      <button onClick={sub}>-</button>
      
    </div>
  )
}
