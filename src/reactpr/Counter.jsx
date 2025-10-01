import React from 'react'
import  { useState, useEffect} from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect (() => {
        document.title = `Count : ${count}`;
    } , [count]);

  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={() => setCount (count + 1)}>Increase</button> <br/>
      <button onClick={() => setCount (count - 1)}>Decrease</button>

    </div>
  )
}
