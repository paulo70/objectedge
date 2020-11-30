import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
const [city, setCity]       = useState('')
const [cities, setCities]   = useState([])
const [ showModal, setShowModal ] = useState(false)

const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'  

useEffect(() => {
  const fecthData = async () => {
    try{
      const req = await axios (URL)
      const res = req.data    
      const citie = res.map((citie) => citie.municipio.microrregiao.mesorregiao.UF.nome)
      const city = citie.filter((c, i) => citie.indexOf(c) === i);
      
      setCities(city.sort())

    } catch (error){
        console.log(error)
    }
  }

  fecthData()

},[URL])

useEffect(() => {

})

const handleRegister = (event) => {
  event.preventDefault()

  const registerBillingDB = localStorage['register']
  const register = registerBillingDB ? JSON.parse(registerBillingDB) : []

  register.unshift(new Model(new Date().getTime(), name, address, zipCode, city))

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

const handleCity = (event) => {
  setCity(event.target.value)
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


        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" size="sm" custom onChange = { handleCity }>
            { cities.map((item, index) =>
            <option value = { item} key = { index }>{ item }</option>
          )}
          </Form.Control>
        </Form.Group>  
          
   
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