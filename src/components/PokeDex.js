import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Power from '@comps/Power'
import {
  calculate,
} from '@libs/calculate'

import cute from '@app/cute.png'


const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 128;

  background: rgba(0, 0, 0, .25);

  top: 0;
  left: 0;
`

const StyledPokeDexPanel = styled('div')`
  width: 40%;
  height: 90%;

  background: #A3302F;

  overflow: auto;
  padding: 10px;
`

const SideDisplay = styled('div')`
  width: 100%;
  height: 100%;
  overflow: auto;
`

const StyledCard = styled('div')`
  background: #D0D0D0;
  border: 2px solid #111;
  padding: 10px 5px;
  width: 100%;
  display: flex;
`

const LeftCol = styled('div')`
  width: 30%;
    img {
      width: 100%;
  }
`
const RightCol = styled('div')`
  width: 70%;
    padding: 10px;
    p {
      font-family: 'Gaegu';
      font-size: 2em;
      margin: 0 !important;
    }
`

const StyledInfoDisplay = styled('div')`
  border: 2px solid #2A1E0B;
  background: #91E563;
  height: 256px;
  font-family: 'VT323';
  color: #2A1E0B;
  padding: 10px;
`

class InfoDisplay extends Component {

  formatHP = (val) => {
    if (val > 100) {
      return 100
    }

    if (val < 0) {
      return 0
    }

    return val
  }

  calculate = () => {
    return calculate(this.props.hp, this.props.attacks, this.props.weaknesses)
  }

  render() {
    const c = this.calculate()
    if (this.props.name !== null)
      return (
        <StyledInfoDisplay>
          <p>
            Name: {this.props.name}
          </p>
          <p>
            HP: {c.hp}
          </p>
          <p>
            Damage: { c.damage }
          </p>
          <p>
            Weak: { c.weak }
          </p>
          <p>
            Attack: { c.atk }
          </p>
          <p>
            Happiness: {c.happy }
          </p>
      
        </StyledInfoDisplay>
      )
    
    return (
      <StyledInfoDisplay >
        <p>No infomation</p>
      </StyledInfoDisplay >
    )
  }
}

export const ListCard = class ListCard extends Component {
  calculate = () => {
    return calculate(this.props.hp, this.props.attacks, this.props.weaknesses)
  }

  listHappy = () => {
    const c = this.calculate()

    return c.happiness.map(() => {
      return <img src={cute} width="48px" />
    })
  }

  render() {
    const c = this.calculate()
    return (
      <StyledCard>
        <LeftCol>
          <img src={this.props.imageUrl} alt={this.props.name}/>
        </LeftCol>
        <RightCol>
          <p>
            {this.props.name}
          </p>

          <p>
            HP:
          </p>
          <Power val={c.hp}/>
          <p>
            STR:
          </p>
          <Power val={c.atk}/>

          <p>
            WEAK:
          </p>
          <Power val={c.weak}/>
          
          <div>
            {this.listHappy()}
          </div>

          {
            (this.props.poke === true) ? (
              <div>
                <button onClick={() => {
                  this.props.onSelectClick({ ...this.props })
                }}>Show Info</button>
                <button onClick={() => {
                  this.props.onAddClick({ ...this.props })
                }}>Add to Dex</button>
              </div>
            ) : (
              <button onClick={ () => {
              this.props.onClickRemove(this.props.index)
              }}>Remove from Dex</button>
            )
          }
          
        </RightCol>
      </StyledCard>
    )
  }
}

class PokeDex extends Component {
  state = {
    name: null,
    hp: 100,
    attacks: [],
    weaknesses: [],

    search: '',
    search_by: 'name',
  }
  componentWillMount() {
    this.props.onLoadCards()
  }

  onAdd = (data) => {
    this.props.onAddClick(data)
  }

  selectPokemon = (pokemon) => {
    this.setState({
      name: pokemon.name,
      hp: pokemon.hp,
      attacks: pokemon.attacks,
      weaknesses: pokemon.weaknesses,
    })
  }

  listCard = () => {
    return this.props.cards.map((card, index) => {
      return (
        <ListCard poke={true} key={index} onSelectClick={this.selectPokemon} onAddClick={this.onAdd} {...card} />
      )
    })
  }

  onSearch = (value) => {
    this.setState({
      search: value,
    })
    this.props.onSearch(value, this.state.search_by)
  }
  
  onSelectField = (value) => {
    this.setState({
      search_by: value,
    })

    this.props.onSearch(this.state.search, value)
  }

  render() {
    if (this.props.show)
      return (
        <Background onClick={this.props.onClickBG}>
          <StyledPokeDexPanel onClick={(e) => {
            e.stopPropagation()
          }}>
            <SideDisplay>
              { this.listCard() }
            </SideDisplay>
          </StyledPokeDexPanel>
          <StyledPokeDexPanel onClick={(e) => {
            e.stopPropagation()
          }}>
            <input
              placeholder={ 'search by ... ' + this.state.search_by}
              onChange={(e) => {
                this.onSearch(e.target.value)
              }}
            />
            <select onChange={(e) => {
              this.onSelectField(e.target.value)
            }}>
              <option value="name">Name</option>
              <option value="type">Type</option>
            </select>
            <InfoDisplay 
              {...this.state}
            />
          </StyledPokeDexPanel>
        </Background>
      )
    
      return (<Fragment></Fragment>)
  }
}

PokeDex.defaultProps = {
  show: false,
}

export default PokeDex