import {
  select,
  call,
  put,
  fork,

  takeEvery,

  takeLatest,

  throttle,
} from 'redux-saga/effects'

import {
  GET_CARDS,

  setCards,
} from '@ducks/actions'

import {
  getCards as getCardsApi
} from '@libs/api'

function* getCards(action) {
  const api = yield call(getCardsApi, action.name, action.poke_type, action.limit)
  const {cards} = yield api.json()

  yield put(setCards(cards))
}

export function* saga() {
  yield throttle(0, GET_CARDS, getCards)
}