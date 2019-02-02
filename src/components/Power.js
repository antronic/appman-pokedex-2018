import React, { Component } from 'react'
import styled from 'styled-components'

const StyledWrapperPower = styled('div')`
  width: 100%;
  height: 16px;
  background: #aaa;
  position: relative;
  overflow: hidden;
`

const PowerBar = styled('div')`
  width: ${props => props.val - 10 + '%'};
  height: 100%;
  background: #E06B39;
  position: absolute;

  top: 0;
  left: 0;
`

class Power extends Component {
  render() {
    return (
      <StyledWrapperPower>
        <PowerBar val={this.props.val}/>
      </StyledWrapperPower>
    )
  }
}

Power.defaultProps = {
  val: 50,
}

export default Power