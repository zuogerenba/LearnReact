import React, { useState, useCallback } from 'react'

export default function CallBackHook01() {

  const [count,setCount] = useState(0);

  const increment = useCallback(()=>{
    setCount(count+1)
  },[count])
  return (
    <div>
      <h2>当前计数{count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  )
}
