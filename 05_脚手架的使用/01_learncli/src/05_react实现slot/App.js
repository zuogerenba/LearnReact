import React, { Component } from 'react'
import NavBar from './NavBar'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </NavBar> */}
        <NavBar 
          left={<span>aaa</span>}
          center={<span>bbb</span>}
          right={<span>ccc</span>}
        />
      </div>
    )
  }
}

// 方法一、子组件通过this.props.children[0]即可取得父组件传进来的子组件 注意：需要双标签，子children[index]，

// 方法二、通过单标签传属性 <NavBar left ={<span>aaa</span>} center={...} right={..} />
