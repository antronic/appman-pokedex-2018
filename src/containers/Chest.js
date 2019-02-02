import { connect } from 'react-redux'
import Chest from '@comps/Chest'

import {
  getCards
} from '@ducks/actions'

const mapStateToProps = state => ({
  cards: state.chest,
})

const mapStateDispatchToProps = dispatch => ({
  onLoadChestCard: () => { dispatch(getCards()) },
})

export default connect(mapStateToProps, mapStateDispatchToProps)(Chest)