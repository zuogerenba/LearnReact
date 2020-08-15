import React, { useRef } from 'react'

export default function RefHook() {
  const titleRef = useRef();
  const inputRef = useRef();

  function handleText() {
    titleRef.current.innerHTML = 'Hello'
  }
  return (
    <div>
      <h2 ref={titleRef}>Ref</h2>
      <button onClick={e => handleText()}>修改</button>
    </div>
  )
}
