import React, { useEffect, useState } from 'react'

export default function MutilEffect() {

  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('修改DOM',count)
  },[count]) 
  useEffect(()=>{
    console.log('订阅事件')
  },[]) 
  useEffect(()=>{
    console.log('网络请求')
  },[]) 
  return (
    <div>
      <h2>当前计数{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
