import React, { Component } from 'react'

import TabControl from './TabControl'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: '新款',
      titles: ['新款', '热门', '推荐']
    }
  }
  render() {
    return (
      <div>
        <TabControl titles={this.state.titles} itemClick={index => this.itemClick(index)} />
        <h2>{this.state.currentItem}</h2>
      </div>
    )
  }
  itemClick(index) {
    this.setState({
      currentItem: this.state.titles[index]
    })
  }
}
