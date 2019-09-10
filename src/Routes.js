import React from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Task from './components/Task'
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask'

function Routes() {
  return (
    <Router>
      <Route path='/' exact component={Task} />
      <Route path='/create' component={AddTask} />
      <Route path='/update' component={UpdateTask} />
    </Router>
  )
}

export default Routes
