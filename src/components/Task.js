import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';

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
        var color;
        if(index % 2 === 0){
            color = task.done === true ? '#218838' : '#ECF0F5';
        }else{
            color = task.done === true ? '#218838' : '#D6D8DB';
        }

        return color;
    }

    render() {
        return (
            <div className='container inner-content'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 offset-xs-10 offset-sm-10 offset-md-10 offset-lg-10'>
                        <Link className='btn btn-success' to='/create'>
                            <FontAwesomeIcon icon='plus' />
                            New
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <table className='table table-striped'>
                        <thead>
                            <tr className="table-secondary">
                                <th className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>Status</th>
                                <th className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>To Do</th>
                                <th className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.map((task, index) => {
                                return (
                                    <tr>
                                        <td className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                            <button onClick={() => this.props.handleDone(index)} className='btn'>
                                                <FontAwesomeIcon icon="check-circle" color={this.sortColor(index, task)} size='4x' />
                                            </button>
                                        </td>
                                        <td>                                        
                                            <div className='container offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>
                                                <h3>{task.name}</h3>
                                                <div className='offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>                                                
                                                    {task.list.map((list, i) => {
                                                        return(
                                                            <button onClick={() => this.props.handleDoneList(index, i)} className='btn'>
                                                                <ul className="list-inline">
                                                                    <li className='list-inline-item'>
                                                                        <FontAwesomeIcon icon="check-circle" color={this.sortColor(index, list)} size='lg' /> 
                                                                    </li>
                                                                    <li className='list-inline-item'>
                                                                        {list.name}
                                                                    </li>
                                                                </ul>                                                              
                                                            </button>                                                                
                                                        );
                                                    })}                                                
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='container'>
                                                <div className='row'>
                                                    <button className='btn btn-outline-primary' onClick={() => this.selectUpdate(index)}>
                                                        <FontAwesomeIcon icon='edit' />
                                                        Update
                                                    </button>
                                                    <button className='btn btn-outline-danger' onClick={() => this.props.deleteTask(task.id)}>
                                                        <FontAwesomeIcon icon='trash' />
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
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