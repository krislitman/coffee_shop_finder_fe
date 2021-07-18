import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Route, BrowserRouter } from 'react-router-dom'

const routing = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
);

ReactDOM.render( 
  routing,
  document.getElementById('root')
);

reportWebVitals()
