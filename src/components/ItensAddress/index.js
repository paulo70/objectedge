import React from 'react'

const itens = (props) => {
  return (
    props.list.map(item => 
      <tr key = { item.id }>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.zipCode}</td>
      </tr>
    )
  )
}

export default itens