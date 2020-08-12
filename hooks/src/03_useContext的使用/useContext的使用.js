import React, { useContext } from 'react'
import { UserContext,UserTheme } from "../App";
export default function ConetxtHook() {

  const user = useContext(UserContext)
  const theme = useContext(UserTheme)

  console.log(user,theme)
  return (
    <div>
      <h2>ConetxtHook</h2>
    </div>
  )
}
