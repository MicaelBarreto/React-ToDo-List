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
                {/* <Modal
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
                </Modal> */}
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
                                            {/*<button className='btn btn-warning' onClick={() => this.setState({ task })}>
                                                <FontAwesomeIcon icon='edit' />
                                                Update
                                            </button>*/}
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
                                            {/*<button className='btn btn-danger' onClick={() => this.props.deleteTask(task.id)}>
                                                <FontAwesomeIcon icon='trash' />
                                                Delete
                                                </button>*/}
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