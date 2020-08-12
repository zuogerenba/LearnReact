import React, { useReducer } from 'react'

import reducer from './reducer'

// function reducer(state,action) {
//   switch (action.type) {
//     case "increment":
//       return state +1
//     case "decrement":
//       return state - 1
//     default:
//       return state
//   }
// }

export default function ReducerHome() {

  const [state,dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
      <h2>当前计数：{state.count}</h2>
      <button onClick={e => dispatch({type:'increment'})}>+1</button>
      <button onClick={e => dispatch({type:'decrement'})}>-1</button>
    </div>
  )
}
