import React from 'react'

export default ({ ItemTitle, onClick }) => {
  return (
    <div>
      <input type='checkbox' onClick={onClick} />
      <p>{ItemTitle}</p>
    </div>
  )
}
