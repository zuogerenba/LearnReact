import React, { Component } from 'react'
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       message: '你好啊'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h2>我是APP组件</h2>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }


/**
 *  函数式组件的特点：
 *    1.没有this对象
 *    2.没有内部状态，不能定义内部数据
 *    3.hooks完美解决上述问题
 *    4.没有生命周期
 */
export default function App() {
  return (
    <div>
      <div>我是APP组件</div>
      <h2>你好啊，React</h2>
    </div>
  )
}