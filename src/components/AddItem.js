import React from 'react'
import { observer } from 'mobx-react'

const AddItem = observer(['store'], ({ store }) => {
  return (
    <form onSubmit={store.submitNewTodo}>
      <input
        type='text'
        onChange={store.changeNewItemInput}
        value={store.newItemInput}
      />
      <input type='submit' value='Submit' />
    </form>
  )
})

export default AddItem
