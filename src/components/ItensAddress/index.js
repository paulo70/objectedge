import React from 'react'

import Remove from '../RemoveItens'

const itens = (props) => {
  return (
    props.list.map(item => 
      <tr key = { item.id }>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.zipCode}</td>
        <td className='text-right'>
          <Remove 
            addres = { item }
            onLoadAddress = { props.onLoadAddress } 
          />
        </td>
      </tr>
    )
  )
}

export default itens