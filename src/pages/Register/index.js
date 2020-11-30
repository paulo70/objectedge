import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
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
const [newAddress, setNewAddress] = useState('')

const [shipping, setShipping] = useState('default')
const [shippingChecked, setShippingChecked] = useState(true)

const [billing, setBilling] = useState('new billing')
const [billingChecked, setBillingChecked] = useState(false)

const [addressBilling, setAdressBilling] = useState()
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


const handleRegister = (event) => {
  event.preventDefault()

  if(name === '' || address === '' || zipCode === '' || city === '') return

  const registerBillingDB = localStorage['register']
  const register = registerBillingDB ? JSON.parse(registerBillingDB) : []

  register.unshift(new Model(new Date().getTime(), name, address, zipCode, city, newAddress))

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

const handleNewAddress = (event) => {
  setNewAddress(event.target.value)
}

const handleShipping = (event) => {

  if(event.target.checked){
    setShipping(event.target.value)
    setShippingChecked(true)
    setAdressBilling(false)
    setBillingChecked(false)
    console.log('value', shipping)
  }

}

const handleBilling = (event) => {
  if(event.target.checked){
    setShipping(event.target.value)
    setBillingChecked(true)
    setAdressBilling(true)
    setShippingChecked(false)
    console.log('value', billing)
  } else{
    setAdressBilling(false)
    setShippingChecked(true)
  }
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

        <div className='groupCheckbox'>
          <label htmlFor="Default Shipping Address">Default Shipping Address:
            <input 
              type='checkbox' 
              name="Default Shipping Address"
              id='Default Shipping Address'
              value='default'
              checked = {shippingChecked}
              onChange = {e => handleShipping(e)} />
              
           </label>   
          
          <label htmlFor="Billing Address">Billing Address:
            <input 
              type='checkbox' 
              name="Billing Address"
              id='Billing Address'
              value='new billing'
              checked = {billingChecked}
              onChange = {e => handleBilling(e)}/>
          </label>
          
        </div>

        { addressBilling ? 

          (
            <Input 
              label = '*New Billing Address' 
              placeholder = 'type your Billing Address' 
              type = 'text' 
              handleChange = {handleNewAddress}
              value = {newAddress}/>
          ): '' 
        }
          
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
        type = 'primary'
        handleClose = {handleClose}
        text = 'continue' 
        />
    </>  
  )
}

export default register