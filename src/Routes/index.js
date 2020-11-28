import React from 'react'
import { useRoutes } from 'hookrouter'

import Register from '../pages/Register'
import Address  from '../pages/Address'

const routes = {
  '/':        () => <Register />,
  '/address': () => <Address />
}

const manager = () => {
  return useRoutes(routes)
}

export default manager