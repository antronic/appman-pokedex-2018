import { connect } from 'react-redux'
import Card from '@comps/Card'
import { ListCard } from '@comps/PokeDex'

import {
  removeFromChest
} from '@ducks/actions'

const mapStateToProps = state => ({
  poke: false,
})

const mapStateDispatchToProps = dispatch => ({
  onClickRemove: (index) => { dispatch(removeFromChest(index)) },
})

export default connect(mapStateToProps, mapStateDispatchToProps)(ListCard)