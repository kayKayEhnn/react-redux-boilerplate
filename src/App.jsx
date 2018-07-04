import React from 'react'
import { hot } from 'react-hot-loader'

import Counter from './containers/CounterContainer'
import './style.css'

const App = () => <Counter />

export default hot(module)(App)
