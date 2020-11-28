import React from 'react'
import { Table } from 'react-bootstrap'

const address = (props) => {
  return (
    <Table stripped = 'true' bordered hover responsive>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        { props.children }
      </tbody>
    </Table>
  )
}

export default address
