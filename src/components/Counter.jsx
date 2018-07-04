import React, { Fragment } from 'react'

const Counter = ({ count, increment, decrement, incrementAsync }) => (
  <Fragment>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={incrementAsync}>Increment Async</button>
  </Fragment>
)

export default Counter
