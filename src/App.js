import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = this.props.store

  render () {
    return (
      <div className='App App-header'>
        <div>{this.state.report}</div>
      </div>
    )
  }
}

export default App
