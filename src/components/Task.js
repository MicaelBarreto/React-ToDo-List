import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Touchable from 'rc-touchable';
import { Link } from 'react-router-dom'

export default class Task extends Component{
    constructor(props){
        super(props);

        this.state={
            tasks: this.props.tasks
        };
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='float-right'>
                        <Link className='btn btn-success' to='/create'>
                            <FontAwesomeIcon icon='plus' />
                            New
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th className='col-md-9'>To Do</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.map((task) => {
                                return (
                                    <tr>
                                        <td className='align-middle'>
                                            <Touchable onPress={() => this.props.handleDone(task)} activeClassName=''>
                                                <FontAwesomeIcon icon="check-circle" color={task.done === true ? '#218838' : '#DEE2E6'} size='4x' />
                                            </Touchable>
                                        </td>
                                        <td>                                        
                                            <div className='container offset-md-2'>
                                                <h3>{task.name}</h3>
                                                <div className='offset-md-1'>                                                
                                                    {task.list.map((list, i) => {
                                                        return(
                                                            <Touchable onPress={() => this.props.handleDoneList(task.id, i)} activeClassName=''>
                                                                <ul class="list-inline">
                                                                    <li className='list-inline-item'>
                                                                        <FontAwesomeIcon icon="check-circle" color={list.done === true ? '#218838' : '#DEE2E6'} size='lg' /> 
                                                                    </li>
                                                                    <li className='list-inline-item'>
                                                                        {list.name}
                                                                    </li>
                                                                </ul>                                                              
                                                            </Touchable>                                                                
                                                        );
                                                    })}                                                
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <Touchable onPress={() => this.props.deleteTask(task.id)} activeClassName=''>
                                                <button className='btn btn-danger'>
                                                    <FontAwesomeIcon icon='trash' />
                                                    Delete
                                                </button>                                                             
                                            </Touchable>
                                            <button className='btn btn-warning' onClick={() => this.props.selectUpdate(task.id)}>
                                                <FontAwesomeIcon icon='edit' />
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}