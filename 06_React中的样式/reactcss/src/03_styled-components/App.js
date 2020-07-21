import React, { PureComponent } from 'react'

import Home from './home'
import About from './about'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home/>
        <About/>
      </div>
    )
  }
}
