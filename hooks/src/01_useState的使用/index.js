import React, {useState} from 'react'

export default function UseState() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('qmj')
  return (
    <div>
      <h2>{name}你点击了按钮{count}次</h2>
      <button onClick={e => setCount(count + 1)}>按钮</button>
    </div>
  )
}
