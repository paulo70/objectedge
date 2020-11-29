import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { navigate } from 'hookrouter'

import Table from '../../components/Table'
import List  from '../../components/ItensAddress'

import './address.scss'

const address = () => {

  const [ address, setAddress ] = useState([])
  const [ loadAddress, setLoadAddress ] = useState(true)

  useEffect(() => {

    const getListAddress = () => {
      const registerBillingDB = localStorage['register']
      let listAddress = registerBillingDB ? JSON.parse(registerBillingDB) : []
      
      setAddress(listAddress)
      console.log(listAddress)
    }

    if(loadAddress){
      getListAddress()
      setLoadAddress(false)
    }

  },[loadAddress])

  const handleNewRegister = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <>
      <h2>Welcome to area of your address. You can remove or edit an address.</h2>
      <div className = 'btn-newAddress'>
        <Button 
          variant = 'primary' 
          onClick = {handleNewRegister}>
          <strong>Register a new address</strong>
        </Button>
      </div>
      <Table>
        <List list = {address} onLoadAddress = {setLoadAddress}/>
      </Table>
    </>
  )
}

export default address