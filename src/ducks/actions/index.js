export const GET_CARDS = 'API/GET_CARDS'
export const SET_CARDS = 'API/SET_CARDS'

export const GET_CHEST = 'CHEST/GET_CHEST'
export const ADD_TO_CHEST = 'CHEST/ADD_TO_CHEST'
export const REMOVE_FROM_CHEST = 'CHEST/REMOVE_FROM_CHEST'

export const getCards = (name = '', type = '', limit = 20) => ({
  type: GET_CARDS,
  name,
  poke_type: type,
  limit,
})

export const setCards = (cards) => ({
  type: SET_CARDS,
  cards,
})

export const addToChest = (cards) => ({
  type: ADD_TO_CHEST,
  cards,
})

export const removeFromChest = (index) => ({
  type: REMOVE_FROM_CHEST,
  index,
})