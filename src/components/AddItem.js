import React from 'react'
import { observer } from 'mobx-react'

export default ({ onSubmit }) => {
  return <button onClick={onSubmit}>New Todo</button>
}
