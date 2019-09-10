import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Task from './components/Task';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import Header from './components/partials/Header';

function Routes() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Task} />
      <Route path='/create' component={AddTask} />
      <Route path='/update' component={UpdateTask} />
    </Router>
  );
}

export default Routes
