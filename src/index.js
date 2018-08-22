import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './app/App'

const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

render(<Root />, document.getElementById('root'))
