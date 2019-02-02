import { connect } from 'react-redux'
import PokeDex from '@comps/PokeDex'

import {
  getCards,
  addToChest,
} from '@ducks/actions'

const mapStateToProps = state => ({
  cards: state.cards,
})

const mapStateDispatchToProps = dispatch => ({
  onLoadCards: () => { dispatch(getCards()) },
  onAddClick: (card) => { dispatch(addToChest([card]))},
  onSearch: (value, field) => {
    console.log('value', value)
    console.log('fiueld', field)
    dispatch(getCards(value, field))
  },
})

export default connect(mapStateToProps, mapStateDispatchToProps)(PokeDex)