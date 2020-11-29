import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { A } from 'hookrouter'

import Remove from '../RemoveItens'

const itens = (props) => {
  return (
    props.list.map(item => 
      <tr key = { item.id }>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.zipCode}</td>
        <td className='text-right'>
          <A href={'/' + item.id } className='btn btn-warning btn-sm'>
          <FontAwesomeIcon icon = {faEdit} />
          </A>
        </td>
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