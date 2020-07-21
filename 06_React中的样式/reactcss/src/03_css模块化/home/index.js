import React, { PureComponent } from 'react'
import homeStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>我是home组件</h2>
      </div>
    )
  }
}
