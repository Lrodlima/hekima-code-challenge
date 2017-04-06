import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import routes from './config/routes'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('root')
)