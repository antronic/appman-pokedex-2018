import React, { Component, Fragment } from 'react'
import styled from 'styled-components'


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
  div:first-child {
    width: 30%;
    img {
      width: 100%;
    }
  }
  div:last-child {
    width: 70%;
    padding: 10px;
    p {
      font-family: 'Gaegu';
      font-size: 2em;
    }
  }
`

const StyledInfoDisplay = styled('div')`
  border: 2px solid #2A1E0B;
  background: #91E563;
  height: 128px;
  font-family: 'VT323';
  color: #2A1E0B;
  padding: 10px;
`

class InfoDisplay extends Component {
  render() {
    return (
      <StyledInfoDisplay>
        Name: { this.props.name }
      </StyledInfoDisplay>
    )
  }
}

class ListCard extends Component {
  render() {
    return (
      <StyledCard>
        <div>
          <img src={this.props.imageUrl} alt={this.props.name}/>
        </div>
        <div>
          <p>
            {this.props.name}
          </p>
          <button onClick={() => {
            this.props.onAddClick({...this.props})
          }}>add</button>
        </div>
      </StyledCard>
    )
  }
}

class PokeDex extends Component {
  state = {
    name: 'test',
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
        <ListCard key={index} onAddClick={this.onAdd} {...card} />
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