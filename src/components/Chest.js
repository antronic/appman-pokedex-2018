import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '@conts/Card'


// #81221F
// #A3302F
const StyledChest = styled('div')`
  width: 80%;
  height: 70%;
  border: 10px solid #435B93;
  display: flex;
  /* justify-content: space-between; */

  flex-wrap: wrap;

  /* border-style: dashed; */
  border-radius: 4px;
  background: #c2dff0;

  overflow-y: scroll;

  /* box-shadow: -5px 5px 0px rgba(0, 0, 0, .9); */
`

class Chest extends Component {
  componentWillMount() {
    this.props.onLoadChestCard()
  }
  
  listCard = () => {
    return this.props.cards.map((card, index) => {
      return (
        <Card key={index} poke={false} index={index} {...card} />
      )
    })
  }
  
  render() {
    return (
      <StyledChest>
        {this.listCard()}
      </StyledChest>
    )
  }
}

Chest.defaultProps = {
  cards: [],

  onLoadChestCard: () => {
    console.log('onLoadChestCard')
  },
}

export default Chest