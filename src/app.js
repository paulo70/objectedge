import React from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes'

import './app.scss'


function App(props){
  return (
    <div className='container content'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2>Welcome</h2>
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default App