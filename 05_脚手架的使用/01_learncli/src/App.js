import React, { PureComponent } from 'react'
import Home from './13_redux/Home'
import About from './13_redux/About'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home />
        <hr/>
        <About />
      </div>
    )
  }
}
