import React, { Component } from 'react'

import TabControl from './TabControl'
export default class App extends Component {
  render() {
    return (
      <div>
        <TabControl titles={['新款','热门','推荐']} />
        <h2>新款</h2>
      </div>
    )
  }
}
