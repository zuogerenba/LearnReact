import React, { PureComponent } from 'react'
import store from './store/index'
import {
  addAction,
  subAction
} from "./store/actionCreators";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribue();
  }

  render() {
    console.log(store)
    return (
      <div>
        <h2><button onClick={e => this.addNumber(-1)}>-1</button>当前计数: {this.state.counter}</h2> <button onClick={e => this.addNumber(1)}>+1</button>
      </div>
    )
  }
  addNumber(n) {
    store.dispatch(addAction(n))
  }
  subNumber(n) {
    store.dispatch(subAction(n))
  }
}
