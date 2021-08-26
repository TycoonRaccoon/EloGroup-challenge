import { render } from 'react-dom'
import Routes from './routes'
import React from 'react'
import './index.css'

render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
