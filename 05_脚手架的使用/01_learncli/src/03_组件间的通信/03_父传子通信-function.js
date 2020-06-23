import React, { Component } from 'react'
import propTypes from 'prop-types'

function Child(props) {
  const { name, age, height } = props
  return (
    <div>
      <h2>{name + age + height}</h2>
    </div>
  )
}

Child.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  height: propTypes.number,
  names: propTypes.array
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name="qmj" age={18} height={188} names={['aaa','bb']}/>
      </div>
    )
  }
}
