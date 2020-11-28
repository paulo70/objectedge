import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import Input from '../../components/Input'


const register = () => {

const [name,   setName]     = useState('')
const [adress, setAdress]   = useState('')
const [zipCode, setZipCode] = useState('')

  return (
    <Form>
      <Input 
        label = 'name'    
        placeholder = 'type your name' 
        type = 'text' 
        value = {name}/>
      
      <Input 
        label = 'adress'  
        placeholder = 'type your name' 
        type = 'text' />
      
      <Input 
        label = 'zipCode' 
        placeholder = 'type your name' 
        type = 'text' />

      <Form.Group>
        <Button 
          variant = 'success'
          type = 'submit'>
          Register
        </Button>
      </Form.Group>
    </Form>
  )
}

export default register