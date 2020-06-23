import React, { Component } from 'react'

class Child extends Component {
  render(props) {
    const { onClick } = this.props
    return <button onClick={onClick}>+1</button>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        当前计数{this.state.count}
        <Child onClick={e => this.increment()} />
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
