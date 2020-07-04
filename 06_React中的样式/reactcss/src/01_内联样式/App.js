import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    const pStyle = {
      color: 'orange'
    }
    return (
      <div>
        <h2 style={{fontSize: "50px", color: "red"}}>我是标题</h2>
        <p style={pStyle}>我是一段文字</p>
      </div>
    )
  }
}

// 不推荐，伪类，伪元素根本无法写
