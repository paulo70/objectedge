import React from 'react'
import { Table } from 'react-bootstrap'

const address = (props) => {
  return (
    <Table stripped = 'true' bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>ZipCode</th>
        </tr>
      </thead>
      <tbody>
        { props.children }
      </tbody>
    </Table>
  )
}

export default address
