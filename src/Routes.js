import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Task from './components/Task';
import Header from './components/partials/Header';

function Routes() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Task} />
    </Router>
  );
}

export default Routes
