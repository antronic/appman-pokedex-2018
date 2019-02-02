import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '@ducks'

import '@libs/fetch'

import './index.css'
import App from './App'

const AppComponent = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(<AppComponent />, document.getElementById('root'))
