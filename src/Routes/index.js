import React from 'react'
import { useRoutes } from 'hookrouter'

import Register from '../pages/Register'
import Address  from '../pages/Address'
import Update   from '../pages/Update'

const routes = {
  '/': ()=> <Register />,
  '/address': () => <Address />,
  '/update/:id': ({id}) => <Update id={id}/>
}

const manager = () => {
  return useRoutes(routes)
}

export default manager