import React, { Component } from 'react'
import styled from 'styled-components'
import Chest from '@conts/Chest'
import PokeDex from '@conts/PokeDex'

const StyledApp = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #73A4C2;
  position: relative;
/* 
  background: -moz-radial-gradient(center, ellipse cover, #1d86f7 0%, #164ab4 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #1d86f7 0%,#164ab4 100%);
  background: radial-gradient(ellipse at center, #1d86f7 0%,#164ab4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d86f7', endColorstr='#164ab4',GradientType=1 ); */
`

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b",

  PokeDex: "#A22F2E",
}

const Title = styled('p')`
  margin: 0;
  padding: 0;
  font-size: 5em;

  color: #EEC444;
  text-shadow: -5px 0px 0px #3E5A97;
`

const AddButton = styled('button')`
  outline: 0;
  -webkit-appearance: none;
  border: 0;
  display: block;

  width: 64px;
  height: 64px;
  border-top-left-radius: 128px;

  position: absolute;
  bottom: 0;
  right: 0;

  padding-top: 8px;
  padding-left: 24px;
  background: ${COLORS.PokeDex};
  transition: all .25s ease;
  z-index: 64;
  &:hover {
    width: 70px;
    height: 70px;
  }
  span {
    color: #fff;
    font-size: 3em;
  }
`

class App extends Component {
  state = {
    showDex: true,
  }

  togglePokedex = (bool) => {
    console.log('test')
    this.setState({
      showDex: bool,
    })
  }
  render() {
    return (
      <StyledApp>
        <PokeDex onClickBG={() => this.togglePokedex(false)} show={this.state.showDex}/>
        <Title>My Pokédex</Title>
        <Chest/>
        <AddButton onClick={() => this.togglePokedex(true)}>
          <span>+</span>
        </AddButton>
      </StyledApp>
    )
  }
}

export default App
