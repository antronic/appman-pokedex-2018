import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { saga } from './reducers/saga'
import reducers from '@ducks/reducers'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create Redux Store
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

// run Saga
sagaMiddleware.run(saga)

export default store

