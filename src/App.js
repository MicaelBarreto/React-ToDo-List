import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task from './components/Task';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import Header from './components/partials/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrash, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

var tasks = [
  {id:0, name: 'Reunião', done: false, list: [
      {name: 'Metas', done: false},
      {name: 'Lucros', done: true},
      {name: 'Novas propóstas', done: true},
  ]},
  {id:1, name: 'Reunião', done: true, list: [
      {name: 'Metas', done: false},
      {name: 'Lucros', done: true},
      {name: 'Novas propóstas', done: true},
  ]},
  {id:2, name: 'Reunião', done: false, list: [
      {name: 'Metas', done: false},
      {name: 'Lucros', done: true},
      {name: 'Novas propóstas', done: true},
  ]},
  {id:3, name: 'Reunião', done: true, list: [
      {name: 'Metas', done: false},
      {name: 'Lucros', done: true},
      {name: 'Novas propóstas', done: true},
  ]},
];

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks,
      task: [],
      indexUpdate: 0,
    }
  }

  addTask = task => {
    var tasks = [...this.state.tasks];
    tasks.push({
        id: tasks.length,
        name: task.name,
        done: task.done,
        list: task.list
    });
    this.setState({ tasks });
  }

  handleDone = index => {
    var tasks = {...this.state.tasks};
    tasks[index].done = tasks[index].done === true ? false : true;
    tasks[index].list = tasks[index].list.map(list => {
      if(tasks[index].done){
        list.done = true;
      }      
      return list;
    })
    
    this.setState({ tasks: Object.values(tasks) });
  }

  handleDoneList = (id, index) => {
    var tasks = {...this.state.tasks};
    tasks[id].list[index].done = tasks[id].list[index].done === true ? false : true;
    this.setState({ tasks: Object.values(tasks) });
  }

  deleteTask = id => {
    var tasks = {...this.state.tasks};
    tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  }   

  updateTask = (task, index) => {
    var tasks = {...this.state.tasks};
    tasks[index] = task;
    this.setState({ tasks: Object.values(tasks) });
  }

  selectUpdate = (index) => {
    var task = {...this.state.tasks[index]};
    this.setState({ task, indexUpdate: index });
    return    
  }
  
  render(){
    return (
      <div className='container'>
        <Router>
          <Header />
          <Route path='/' exact component={() => <Task tasks={this.state.tasks} handleDone={this.handleDone} deleteTask={this.deleteTask} handleDoneList={this.handleDoneList} selectUpdate={this.selectUpdate} />} />
          <Route path='/create' component={() => <AddTask addTask={this.addTask} />} />
          <Route path='/update' component={() => <UpdateTask updateTask={this.updateTask} task={this.state.task} index={this.state.indexUpdate} />} />
        </Router>
      </div>
    );
  }
}

library.add(faPlus, faEdit, faTrash, faCheckCircle, faTimes);
