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

    sortColor = (index, task) => {        
        if(index % 2 == 0){
            var color = task.done === true ? '#218838' : '#ECF0F5';
        }else{
            var color = task.done === true ? '#218838' : '#D6D8DB';
        }

        return color;
    }

    render() {
        return (
            <div className='container inner-content'>
                <div className='row'>
                    <div className='float-right'>
                        <Link className='btn btn-success' to='/create'>
                            <FontAwesomeIcon icon='plus' />
                            New
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <table className='table-striped'>
                        <thead>
                            <tr class="table-secondary">
                                <th className='col-md-2'>Status</th>
                                <th className='col-md-8'>To Do</th>
                                <th className='col-md-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.map((task, index) => {
                                return (
                                    <tr>
                                        <td className='col-md-2 align-self-center'>
                                            <Touchable onPress={() => this.props.handleDone(index)} activeClassName=''>
                                                <FontAwesomeIcon icon="check-circle" color={this.sortColor(index, task)} size='4x' />
                                            </Touchable>
                                        </td>
                                        <td>                                        
                                            <div className='container offset-md-1'>
                                                <h3>{task.name}</h3>
                                                <div className='offset-md-1'>                                                
                                                    {task.list.map((list, i) => {
                                                        return(
                                                            <Touchable onPress={() => this.props.handleDoneList(index, i)} activeClassName=''>
                                                                <ul className="list-inline">
                                                                    <li className='list-inline-item'>
                                                                        <FontAwesomeIcon icon="check-circle" color={this.sortColor(index, list)} size='lg' /> 
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
                                            <button className='btn btn-outline-info' onClick={() => this.selectUpdate(index)}>
                                                <FontAwesomeIcon icon='edit' />
                                                Update
                                            </button>
                                            <button className='btn btn-outline-danger' onClick={() => this.props.deleteTask(task.id)}>
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
            </div>
        );
    }
}

export default withRouter(Task);