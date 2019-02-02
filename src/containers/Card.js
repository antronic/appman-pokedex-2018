import { connect } from 'react-redux'
import Card from '@comps/Card'

import {
  removeFromChest
} from '@ducks/actions'

const mapStateToProps = state => ({})

const mapStateDispatchToProps = dispatch => ({
  onClickRemove: (index) => { dispatch(removeFromChest(index)) },
})

export default connect(mapStateToProps, mapStateDispatchToProps)(Card)