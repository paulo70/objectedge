import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import Input from '../../components/Input'
import Model from '../../models/model.js'


const register = () => {

const [name,   setName]     = useState('')
const [address, setAdress]  = useState('')
const [zipCode, setZipCode] = useState('')


const handleRegister = (event) => {
  event.preventDefault()

  const registerBillingDB = localStorage['register']
  const register = registerBillingDB ? JSON.parse(registerBillingDB) : []

  register.push(new Model(new Date().getTime(), name, address, zipCode))

  localStorage['register'] = JSON.stringify(register)
}


const handleName = (event) => {
  console.log(name,'rola')
  setName(event.target.value)
}

const handleAdress = (event) => {
  setAdress(event.target.value)
}

const handleZipCode = (event) => {
  setZipCode(event.target.value)
}

  return (
    <Form onSubmit = {handleRegister}>
      <Input 
        label = 'name'    
        placeholder = 'type your name' 
        type = 'text' 
        value = {name}
        handleChange = {handleName}/>
      
      <Input 
        label = 'adress'  
        placeholder = 'type your name' 
        type = 'text'
        value = {address} 
        handleChange = {handleAdress}/>
      
      <Input 
        label = 'zipCode' 
        placeholder = 'type your name' 
        type = 'text' 
        handleChange = {handleZipCode}
        value = {zipCode}/>

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