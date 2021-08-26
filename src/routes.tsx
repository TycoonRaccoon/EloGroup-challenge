import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LeadsPainel from './pages/leads-painel'
import Register from './pages/register'
import React from 'react'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/leads-painel' component={LeadsPainel} sensitive />
        <Route path='/new-painel' component={() => <span />} sensitive />
        <Route path='/' component={Register} sensitive />
      </Switch>
    </Router>
  )
}

export default Routes
