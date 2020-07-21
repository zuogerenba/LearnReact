import React, { PureComponent } from 'react'

import styled from 'styled-components'
const MJInput = styled.input.attrs({
  placeholder: 'coderqmj',
  bColor: "red",
})`
  background-color: lightblue;
  border-color: ${props => props.bColor};
  color: ${props=>props.color};
`

export default class About extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      color: "orange"
    }
  }
  render() {
    return (
      <div>
        <MJInput type="password" color={this.state.color}/>
      </div>
    )
  }
}
