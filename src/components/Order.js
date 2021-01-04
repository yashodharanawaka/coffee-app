import React from 'react'

const Order = ({ order }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.coffeeType}</td>
      <td>{order.amount}</td>
    </tr>
  )
}

export default Order
