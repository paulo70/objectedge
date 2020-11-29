import React from 'react'
import { Form } from 'react-bootstrap'

const input = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type = {props.type}
        placeholder = {props.placeholder}
        onChange = {props.handleChange}
        value = {props.value}
      />
    </Form.Group>
  )
}

export default input