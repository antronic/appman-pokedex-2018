import {
  GET_CHEST,
  ADD_TO_CHEST,
  REMOVE_FROM_CHEST,

  SET_CARDS,
} from '../actions'

const initialState = {
  cards: [],
  chest: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CHEST: {
      return ({
        ...state,
        chest: [
          ...state.chest,
          ...action.cards,
        ]
      })
    }

    case REMOVE_FROM_CHEST: {
      return ({
        ...state,
        chest: [
          ...state.chest.splice(0, action.index),
          ...state.chest.slice(action.index + 1),
        ]
      })
    }

    case SET_CARDS: {
      return ({
        ...state,
        cards: action.cards
      })
    }

    default:
      return state
  }
}