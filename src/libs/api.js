import {
  get
} from './fetch'

// Lib made by me :)
import 'form-pack'
import { jsonFormPack } from 'form-pack/dist/json.min'

const API_ENDPOINT = 'http://localhost:3030'
const GET_CARDS = API_ENDPOINT + '/api/cards?'

export function getCards(name, type, limit = 20) {
  if (type === 'name') {
    return get(GET_CARDS + '&' + jsonFormPack({
      name,
      limit,
    }))
  }

  if (type === 'type') {
    return get(GET_CARDS + '&' + jsonFormPack({
      type: name,
      limit,
    }))
  }

  return get(GET_CARDS + '&' + jsonFormPack({
    limit,
  }))

}