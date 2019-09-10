import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';

export default class Task extends Component{
    constructor(props){
        super(props);

        const tasks = [
            {name: 'Reunião', done: false, done_at: ''},
            {name: 'Reunião', done: true, done_at: ''},
            {name: 'Reunião', done: false, done_at: ''},
            {name: 'Reunião', done: true, done_at: ''},
        ];

        this.state={
            tasks,
            showAddTask: false,
            showUpdateTask: false
        };
    }

    addTask = task => {
        const tasks = [...this.state.tasks];
        tasks.push({
            name: task.name,
            done: task.done,
            done_at: task.date
        });
        this.setState({ tasks });
    }

    render() {
        return (
            <div className='container'>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })} />
                <div className='col-md-2'>
                    <button onClick={() => this.setState({ showAddTask: true })}>Add</button>
                </div>
                <table>
                    <tr>
                        <th>Status</th>
                        <th>To Do</th>
                        <th>Done At</th>
                        <th>Actions</th>
                    </tr>
                    {this.state.tasks.map((task) => {
                        return (
                            <tr>
                                <td>
                                   {task.done ? 'Feito' : <button className='btn btn-primery'>Encerrar</button>} 
                                </td>
                                <td>{task.name}</td>
                                <td>{task.done_at}</td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}