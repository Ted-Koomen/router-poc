import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  const {name, quantity, id} = props
  return (
    <div>
      <Link to={`/item/${id}`}><h5>{name}</h5></Link>
      <h6>{quantity}</h6>
    </div>
  )
}

export default Item