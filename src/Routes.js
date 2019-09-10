import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task from './components/Task';
import Header from './components/partials/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrash, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

function Routes() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Route path='/' exact component={Task} />
      </Router>
    </div>
  );
}

library.add(faPlus, faEdit, faTrash, faCheckCircle)
export default Routes
