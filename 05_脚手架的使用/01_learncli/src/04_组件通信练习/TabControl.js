import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }
  render(props) {
    const { titles } = this.props;
    const {currentIndex} = this.state
    console.log(titles)
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return <div className={((currentIndex === index) ? 'active' : '') + " btn-item"}>{item}</div>
          })
        }
      </div>
    )
  }
}

