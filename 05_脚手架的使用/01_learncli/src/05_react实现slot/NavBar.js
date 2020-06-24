import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          {this.props.left}
        </div>
        <div className="center">
          {this.props.center}
        </div>
        <div className="right">
          {this.props.right}
        </div>
      </div>
    )
  }
}
