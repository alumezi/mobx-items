import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ todo }) => {
  return (
    <div className='todo'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => {
          todo.completed = !todo.completed
        }}
      />
      <div>{todo.task}</div>
    </div>
  )
})
