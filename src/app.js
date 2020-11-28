import React from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Register from './pages/Register'
import Address  from './pages/Address'

import './app.scss'


function App(props){
  return (
    <div className='container content'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2>Welcome</h2>
          <Register />
          <Address />
        </div>
      </div>
    </div>
  )
}

export default App