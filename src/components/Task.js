import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import TaskModal from './TaskModal';

class Task extends Component{
    constructor(props){
        super(props);

        this.state={
            tasks: this.props.tasks,
            showModal: false,
            task: [],
            index: 0
        };
    }

    selectUpdate = (index) => {
        this.props.history.push({
            pathname: '/update',
            state: { 
                ...this.state.tasks[index],
                isNew: false,
                index,
            }
        });
    }

    renderTask = (index, task) => {
        return (
            <div>
                <h3>{task.name}</h3>
                <div className='offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>                                                
                    {task.list.map((list, i) => {
                        return(
                            <div className='row'>
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
                            </div>                                                               
                        );
                    })}                                                
                </div>
            </div>
        );
    }

    sortColor = (index, task) => {
        var color;
        if(index % 2 === 0){
            color = task.done === true ? '#218838' : '#FFFFFF';
        }else{
            color = task.done === true ? '#218838' : '#D6D8DB';
        }

        return color;
    }

    toggleModal = (index, task) => {
        this.setState({ showModal: true, task, index });
    }

    render() {
        return (
            <div className='container inner-content'>                
                <div className='row mb-3'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 offset-xs-11 offset-sm-11 offset-md-11 offset-lg-11'>
                        <Link className='btn btn-success col-xs-1 col-sm-1 col-md-1 col-lg-1' to={{pathname: '/create', state: {isNew: true}}}>
                            <FontAwesomeIcon icon='plus' />
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <table className='table table-striped round-table'>
                        <tbody>
                            {this.state.tasks.map((task, index) => {
                                return (
                                    <tr className='row' onClick={() => this.toggleModal(index, task)}>
                                        <td className='col-xs-2 col-sm-2 col-md-2 col-lg-2 middle-alignment'>
                                            <button onClick={() => this.props.handleDone(index)} className='btn'>
                                                <FontAwesomeIcon icon="check-circle" color={this.sortColor(index, task)} size='4x' />
                                            </button>
                                        </td>
                                        <td className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>                                        
                                            <div className='container offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>
                                                {this.renderTask(index, task)}
                                            </div>
                                        </td>
                                        <td className='col-xs-2 col-sm-2 col-md-2 col-lg-2 middle-alignment'>
                                            <div className='container'>
                                                <div className='row'>
                                                    <button className='btn btn-outline-primary col-xs-12 col-sm-12 col-md-12 col-lg-12' onClick={() => this.selectUpdate(index)}>
                                                        <FontAwesomeIcon icon='edit' />
                                                        Update
                                                    </button>                                                    
                                                </div>
                                                <div className='row'>
                                                    <button className='btn btn-outline-danger col-xs-12 col-sm-12 col-md-12 col-lg-12' onClick={() => this.props.deleteTask(task.id)}>
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
                { this.state.showModal ? <TaskModal 
                    show={this.state.showModal} 
                    task={this.state.task} 
                    closeModal={() => this.setState({ showModal: false })}
                    renderTask={(index, task) => this.renderTask(index, task)}
                    index={this.state.index} /> : null }
            </div>
        );
    }
}

export default withRouter(Task);