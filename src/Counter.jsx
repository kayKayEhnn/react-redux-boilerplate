import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = { count: 0 }
  }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render () {
    return <h1>{this.state.count}s</h1>
  }
}
