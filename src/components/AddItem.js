import React from 'react'
import { observer, inject } from 'mobx-react'

const AddItem = inject('store')(
  observer(({ store }) => {
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
)

export default AddItem
