import React, { useState, createContext } from 'react'

// import UseState from './01_useState的使用'
// import Title from './02_useEffect的使用/01_class实现'
import TitleCounter from './02_useEffect的使用/02_hook实现'
import HookSubscribe from './02_useEffect的使用/03_useEffect模拟订阅取消'
import MutilEffect from './02_useEffect的使用/04_多个Effect的使用'
import ConetxtHook from './03_useContext的使用/useContext的使用'
import ReducerHome from './04_useReducer的使用/home'
import ReducerAbout from './04_useReducer的使用/about'


export const UserContext = createContext();
export const UserTheme = createContext();

export default function App() {

  const [show, setShow] = useState(true)
  return (
    <div>
      {/* <UseState /> */}
      {/* <Title /> */}
      {/* <TitleCounter /> */}
      {/* {show&& <HookSubscribe/>} */}
      {/* {show&&<MutilEffect/>} */}

      {/* <UserContext.Provider value = {{name:'qmj',age: 18}}>
        <UserTheme.Provider value={{fontSize:'30px',color:'red'}}>
          <ConetxtHook />
        </UserTheme.Provider>
      </UserContext.Provider> */}

      <ReducerHome />
      <ReducerAbout />
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
