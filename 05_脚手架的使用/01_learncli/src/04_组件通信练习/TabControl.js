import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  render(props) {
    const { titles } = this.props;
    const { currentIndex } = this.state
    console.log(titles)
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (<div className={((currentIndex === index) ? 'active' : '') + " btn-item"} onClick={e => this.itemClick(index)}><span>{item}</span></div>)
          })
        }
      </div>
    )
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })

    const { itemClick } = this.props;
    itemClick(index)
  }
}

