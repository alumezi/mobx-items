import React, { Component } from 'react'
import Item from './components/Item'
import AddItem from './components/AddItem'
import { inject, observer } from 'mobx-react'
import './App.css'
import DevTools from 'mobx-react-devtools'

class App extends Component {
  render () {
    const store = this.props.store
    return (
      <div className='App App-header'>
        <DevTools />
        {store.todos.map(item => (
          <Item todo={item} key={item.task} />
        ))}
        <div>
          <AddItem />
        </div>
        {store.completedTodosCount}
      </div>
    )
  }
}

export default inject('store')(observer(App))
