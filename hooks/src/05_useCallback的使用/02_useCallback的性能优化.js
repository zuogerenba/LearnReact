import React, { useState, useCallback } from 'react'


function Button(props) {
  return <button onClick={props.increment}>+1</button>
}

export default function CallBackHook02() {
  const [count,setCount] = useState(0);

  const increment = useCallback(()=>{
    setCount(count+1)
  },[count])
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <Button increment={increment} />
      <Button />
    </div>
  )
}
