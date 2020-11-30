import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Jumbotron } from 'react-bootstrap'
import { navigate, A } from 'hookrouter'

import Input from '../../components/Input'

const update = (props) => {

  const [showModal, setShowModal ] = useState(false)
  const [formValidate, setFormValidate] = useState(false)
  
  const [userName, setUserName] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userZipCode, setUserZipCode] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userNewAddress, setUserNewAddress] = useState('')

  const [loadAddress, setLoadAddress] = useState(true)

  useEffect(() => {

    if (loadAddress) {
      const registerBillingDB = localStorage['register']
      const registers = registerBillingDB ? JSON.parse(registerBillingDB) : []

      const register = registers.filter(
        a => a.id === parseInt(props.id)
      )[0];
      
      setUserName(register.name)
      setUserAddress(register.address)
      setUserZipCode(register.zipCode)
      setUserCity(register.city)
      setUserNewAddress(register.billing)
      setLoadAddress(false)
    }

  },[loadAddress, props])

  const handleBack = (event) => {
    event.preventDefault()
    navigate('/address')
  }

  const handleCloseModal = () => {
    navigate('/address')
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    setFormValidate(true)

    if(event.currentTarget.checkValidity() === true) {
      const registerBillingDB = localStorage['register']
      let register = registerBillingDB ? JSON.parse(registerBillingDB) : []

      register = register.map(registerObj => {
        
        if(registerObj.id === parseInt(props.id)){
          registerObj.name = userName
          registerObj.address = userAddress
          register.zipCode = userZipCode
          register.city = userCity
          register.billing = userNewAddress
        }

        return registerObj
      })

      localStorage['register'] = JSON.stringify(register)
      setShowModal(true)
    }
  }

  const handleChangeName = (event) => {
    setUserName(event.target.value)
  }

  const handleChangeAddress = (event) => {
    setUserAddress(event.target.value)
  }

  const handleChangeZipCode = (event) => {
    setUserZipCode(event.target.value)
  }

  const handleChangeCity = (event) => {
    setUserCity(event.target.value)
  }

  const handleChangeNewAddress = (event) => {
    setUserNewAddress(event.target.value)
  }

  return (
    <>
      <h2>Edit your Address</h2>
      <Jumbotron>
        <Form onSubmit = {handleUpdate} noValidate validated = {formValidate}>
          <Input
            type = 'text'
            label = 'Name'
            placeholder = 'type a name'
            value = {userName} 
            handleChange = {handleChangeName}
          />

          <Input
            type = 'text'
            label = 'Address'
            placeholder = 'type a address'
            value = {userAddress} 
            handleChange = {handleChangeAddress}
          />

          <Input
            type = 'text'
            label = 'ZipCode'
            placeholder = 'type a zipCode'
            value = {userZipCode} 
            handleChange = {handleChangeZipCode}
          />

          <Input
            type = 'text'
            label = 'City'
            placeholder = 'type a city'
            value = {userCity} 
            handleChange = {handleChangeCity}
          />

          <Input
            type = 'text'
            label = 'New billing address'
            placeholder = 'type a new address'
            value = {userNewAddress} 
            handleChange = {handleChangeNewAddress}
          />
          <Form.Group>
            <Button 
              variant = 'primary'
              type = 'submit'>
             <strong> Update </strong>
            </Button>
            
            &nbsp;

            <A href = '/address' className='btn btn-light' onClick = {handleBack}>Back</A>   
          </Form.Group>
        </Form>

        <Modal show = {showModal} onHide = {handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong> Address was updated with success.. </strong>
          </Modal.Body>
          <Modal.Footer>
            <Button variant = 'primary' onClick = {handleCloseModal}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </>
  )
}

export default update