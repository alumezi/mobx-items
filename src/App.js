import React, { Component } from 'react'
import Item from './components/Item'
import AddItem from './components/AddItem'
import { observer } from 'mobx-react'
import './App.css'

class App extends Component {
  state = this.props.store

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'))
  }

  render () {
    return (
      <div className='App App-header'>
        {this.state.todos.map(item => (
          <Item todo={item} key={item.task} />
        ))}
        <div>
          <AddItem onSubmit={this.onNewTodo} />
        </div>
      </div>
    )
  }
}

export default observer(App)
