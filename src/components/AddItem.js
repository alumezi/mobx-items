import React, { Component } from 'react'
import { observer } from 'mobx-react'

class AddItem extends Component {
  render () {
    const { submit, change, value } = this.props
    return (
      <form onSubmit={submit}>
        <input type='text' onChange={change} value={value} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default observer(AddItem)
