import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Touchable from 'rc-touchable';
import { Link, withRouter } from 'react-router-dom'

class Task extends Component{
    constructor(props){
        super(props);

        this.state={
            tasks: this.props.tasks
        };
    }

    selectUpdate = async (index) => {
        await this.props.selectUpdate(index);
        this.props.history.push('/update');
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
                            {this.state.tasks.map((task, index) => {
                                return (
                                    <tr>
                                        <td className='align-middle'>
                                            <Touchable onPress={() => this.props.handleDone(index)} activeClassName=''>
                                                <FontAwesomeIcon icon="check-circle" color={task.done === true ? '#218838' : '#DEE2E6'} size='4x' />
                                            </Touchable>
                                        </td>
                                        <td>                                        
                                            <div className='container offset-md-2'>
                                                <h3>{task.name}</h3>
                                                <div className='offset-md-1'>                                                
                                                    {task.list.map((list, i) => {
                                                        return(
                                                            <Touchable onPress={() => this.props.handleDoneList(index, i)} activeClassName=''>
                                                                <ul className="list-inline">
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
                                            <button className='btn btn-warning' onClick={() => this.selectUpdate(index)}>
                                                <FontAwesomeIcon icon='edit' />
                                                Update
                                            </button>
                                            <Touchable onPress={() => this.props.deleteTask(task.id)} activeClassName=''>
                                                <button className='btn btn-danger'>
                                                    <FontAwesomeIcon icon='trash' />
                                                    Delete
                                                </button>                                                             
                                            </Touchable>
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

export default withRouter(Task);