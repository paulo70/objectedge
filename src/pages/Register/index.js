import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { navigate, A } from 'hookrouter'

import Input from '../../components/Input'
import Message from '../../components/Modal'
import Model from '../../models/model.js'

import './register.scss'


const register = () => {

const [name,   setName]     = useState('')
const [address, setAdress]  = useState('')
const [zipCode, setZipCode] = useState('')
const [ showModal, setShowModal ] = useState(false)


const handleRegister = (event) => {
  event.preventDefault()

  const registerBillingDB = localStorage['register']
  const register = registerBillingDB ? JSON.parse(registerBillingDB) : []

  register.push(new Model(new Date().getTime(), name, address, zipCode))

  localStorage['register'] = JSON.stringify(register)

  setShowModal(true)
}

const handleName = (event) => {
  setName(event.target.value)
}

const handleAdress = (event) => {
  setAdress(event.target.value)
}

const handleZipCode = (event) => {
  setZipCode(event.target.value)
}

const handleClose = () => {
  navigate('/address')
}

  return (
    <>
      <h2>Welcome to register address.</h2>
      <span className='see-itens'>
        <A href = {'/address'}>
          See yours address
        </A>
      </span>

      <Form onSubmit = {handleRegister}>
        <Input 
          label = 'Name'    
          placeholder = 'type your name' 
          type = 'text' 
          value = {name}
          handleChange = {handleName}/>
        
        <Input 
          label = 'Adress'  
          placeholder = 'type your address' 
          type = 'text'
          value = {address} 
          handleChange = {handleAdress}/>
        
        <Input 
          label = 'ZipCode' 
          placeholder = 'type your zipCode' 
          type = 'text' 
          handleChange = {handleZipCode}
          value = {zipCode}/>

        <Form.Group>
          <Button 
            variant = 'primary'
            type = 'submit'>
            <strong>Register address</strong>
          </Button>
        </Form.Group>
      </Form>
      <Message 
        state = {showModal} 
        content =  'Address was registered with success'
        type = 'success'
        handleClose = {handleClose}
        text = 'continue' 
        />
    </>  
  )
}

export default register