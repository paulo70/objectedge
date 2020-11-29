import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import Message from '../Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const remove = (props) => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (event) => {
    event.preventDefault()
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }


  const handleRemoveAddress = (event) => {
    event.preventDefault()

    const registerBillingDB = localStorage['register']
    let address = registerBillingDB ? JSON.parse(registerBillingDB) : []

    address = address.filter(addres => addres.id !== props.addres.id)

    localStorage['register'] = JSON.stringify(address)

    setOpenModal(false)
    props.onLoadAddress(true)
  }

  return (
    <>
      <Button
        variant='danger'
        className= 'btn-sm'
        onClick = {handleOpenModal}>
        <FontAwesomeIcon icon = {faTrashAlt} />
      </Button>

      <Modal show = {openModal} onHide = { handleCloseModal }>
        <Modal.Header>
          <Modal.Title>
            <p>Remove address</p>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p>Are you sure remove this address ? </p>
          <p><strong> {`${props.addres.name} - ${props.addres.address} - ${props.addres.zipCode}`}</strong></p>
        </Modal.Body>

        <Modal.Footer>
          <Button 
            variant = 'primary'
            onClick = {handleRemoveAddress}>
            Yes
          </Button>

          <Button 
            variant = 'light'
            onClick = {handleCloseModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default remove