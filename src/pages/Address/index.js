import React, { useState, useEffect } from 'react'

import Table from '../../components/Table'

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

  return (
    <Table />
  )
}

export default address