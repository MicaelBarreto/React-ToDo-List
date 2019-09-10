import React, { Component } from 'react';
import AddTask from './AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Touchable from 'rc-touchable';
import Modal from 'react-modal';

export default class Task extends Component{
    constructor(props){
        super(props);

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

        this.state={
            tasks,
            showAddTask: false,
            showUpdateTask: false,
            task: {}
        };
    }

    addTask = task => {
        var tasks = [...this.state.tasks];
        tasks.push({
            name: task.name,
            done: task.done,
            done_at: task.date
        });
        this.setState({ tasks });
    }

    updateTask = task => {
        var tasks = {...this.state.tasks};
        tasks[task.id].name = task;
        this.setState({ tasks });
    }

    handleDone = task => {
        var tasks = {...this.state.tasks};
        tasks[task.id].done = tasks[task.id].done === true ? false : true;
        this.setState({ tasks });
    }

    deleteTask = id => {
        var tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks })
    }

    changeEvent = event => {
        var task = {...this.state.task}
        task.name = event
        this.setState({ task })
    }

    render() {
        return (
            <div className='container'>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false }, console.log('cancel'))} 
                />
                <Modal
                    isOpen={this.state.showUpdateTask}
                    onRequestClose={() => this.setState({ showUpdateTask: false })}
                    ariaHideApp={false}
                >
                <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Task</h5>
                                <button className='close' onClick={() => this.setState({ showUpdateTask: false })}></button>
                            </div>
                            <div className='modal-body'>
                                <form>
                                    <div className='form-group'>
                                        <label className='col-md-12'>Name</label>
                                        <div className='col-md-10'>
                                            <input className='form-control' onChange={event => this.setState({ name: event })} value={this.state.task.name}></input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ showUpdateTask: false })}>Close</button>
                                <button className='btn bnt-success' onClick={() => this.updateTask(this.state.task)}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                <div className='col-md-2 pull-right'>
                    <button onClick={() => this.setState({ showAddTask: true })} className='btn btn-success'>
                        <FontAwesomeIcon icon='plus' />
                        New
                    </button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th className='col-md-5'>To Do</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((task) => {
                            return (
                                <tr>
                                    <td>
                                        <Touchable onPress={() => this.handleDone(task)} activeClassName=''>
                                            <FontAwesomeIcon icon="check-circle" color={task.done === true ? '#218838' : '#DEE2E6'} />
                                        </Touchable>
                                    </td>
                                    <td>                                        
                                        <div>
                                            <div>{task.name}</div>
                                            <div>
                                                <ul>
                                                    {task.list.map((list) => {
                                                        return(
                                                            <li>
                                                                <Touchable onPress={() => this.setState({ task: 'a' })} activeClassName=''>
                                                                    <FontAwesomeIcon icon="check-circle" color={list.done === true ? '#218838' : '#DEE2E6'} />                                                                
                                                                </Touchable>
                                                                {list.name}
                                                                <button className='btn btn-danger' onClick={() => this.setState({ task: 'a' })}>
                                                                    <FontAwesomeIcon icon='times' />
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => this.setState({ task, showUpdateTask: true })}>
                                            <FontAwesomeIcon icon='edit' />
                                            Update
                                        </button>
                                        <button className='btn btn-danger' onClick={() => this.deleteTask(task.id)}>
                                            <FontAwesomeIcon icon='trash' />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}