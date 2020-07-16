
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Cover from './Cover'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Cover}></Route>
  </BrowserRouter>,
  document.getElementById('root')
)
