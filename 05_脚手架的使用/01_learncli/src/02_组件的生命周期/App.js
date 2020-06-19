import React, { Component } from 'react'

class Anthor extends Component {
  render() {
    return (
      <div>
        我是其他组件
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      isShow: true
    }
    console.log('constructor')
  }
  render() {
    console.log('render')
    return (
      <div>
        app组件的生命周期
        <button>+1</button>
        <hr/>
        <button onClick={e=>this.changeComponent()}>切换</button>
        {this.state.isShow && <Anthor />}
      </div>
    )
  }

  changeComponent() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}
