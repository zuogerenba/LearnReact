import React, { PureComponent } from 'react'
// import homeStyle from './style.module.css'
// import styled from 'styled-components'
import { 
  HomeWrapper
 } from "./style";


export default class App extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        app
        <h2 className="banner">我是home组件</h2>
      </HomeWrapper>
    )
  }
}
