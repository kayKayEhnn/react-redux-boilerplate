import React, { Fragment } from 'react'

const Counter = ({ count, increment, decrement }) => (
  <Fragment>
    <h1>{count}s</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </Fragment>
)

export default Counter
