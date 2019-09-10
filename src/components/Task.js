import React, {Component} from 'react';
import {
    Button
} from 'react-bootstrap';

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
            tasks
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
            <div ></div>
                <table>
                    <tr>
                        <th>Status</th>
                        <th>To Do</th>
                        <th>Done At</th>
                    </tr>
                    {this.state.tasks.map((task) => {
                        return (
                            <tr>
                                <td>
                                   {task.done ? 'Feito' : <button className='btn btn-primery'>Encerrar</button>} 
                                </td>
                                <td>{task.name}</td>
                                <td>{task.done_at}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}