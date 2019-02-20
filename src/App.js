import React, { Component } from 'react'
import Item from './components/Item'
import AddItem from './components/AddItem'
import { observer } from 'mobx-react'
import './App.css'
import DevTools from 'mobx-react-devtools'

class App extends Component {
  render () {
    const {
      submitNewTodo,
      changeNewItemInput,
      newItemInput,
      todos,
      completedTodosCount
    } = this.props.store
    return (
      <div className='App App-header'>
        <DevTools />
        {todos.map(item => (
          <Item todo={item} key={item.task} />
        ))}
        <div>
          <AddItem
            change={changeNewItemInput}
            submit={submitNewTodo}
            value={newItemInput}
          />
        </div>
        {completedTodosCount}
      </div>
    )
  }
}

export default observer(App)
