import React, { PureComponent } from 'react'


class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
