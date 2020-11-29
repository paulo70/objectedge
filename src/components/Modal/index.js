import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const modal = (props) => {
  return (
    <Modal show = { props.state } onHide = {props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <p className='text-center'><strong> {props.content} !!</strong></p>
      </Modal.Body>

      <Modal.Footer>
        <Button 
          variant = {props.type}
          onClick = { props.handleClose }>
          <strong>{props.text}</strong>
        </Button>

        <Button 
          variant = {props.type}
          onClick = { props.handleClose }>
          <strong>{props.text}</strong>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default modal