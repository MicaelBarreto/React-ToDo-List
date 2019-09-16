import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task from './components/Task';
import ChangeTasks from './components/ChangeTasks';
import Header from './components/partials/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrash, faCheckCircle, faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div className='container'> 
      <Router>
        <Header />
        <Route path='/' exact component={() => <Task />} />
        <Route path='/create' component={() => <ChangeTasks />} />
        <Route path='/update/:id' component={() => <ChangeTasks />} />
      </Router>
    </div>
  );
}

library.add(faPlus, faEdit, faTrash, faCheckCircle, faTimes, faChevronLeft);
