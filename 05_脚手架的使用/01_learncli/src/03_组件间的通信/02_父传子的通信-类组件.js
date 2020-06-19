import React, { Component } from 'react'


class Child extends Component {

  constructor(props) {
    super()

    this.props = props
  }
  render() {
    const {name, age, height} = this.props
    return (
      <h2>子组件展示数据:{name + " "+ age +" " + height}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name="qmj" age="18" height="188"/>
      </div>
    )
  }
}
