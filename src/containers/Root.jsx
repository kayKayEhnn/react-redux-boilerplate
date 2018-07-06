import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import Counter from './CounterContainer'
import '../style.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <Counter />
  </Provider>)

export default hot(module)(Root)
