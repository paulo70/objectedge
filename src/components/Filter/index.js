import React from 'react'

import Input from '../Input'

import './filter.scss'

const filter = (props) => {
  return (
    <div className='filter'>
      <Input 
        label = 'Search'
        type  = 'text'
        placeholder = 'search for an anddress'
        handleChange = {props.handleChange}
        value = {props.value}
      />
    </div>
  )
}

export default filter