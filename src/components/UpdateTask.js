import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default class UpdateTask extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = { task: this.props.task };
    }

    changeEvent = event => {
        var task = {...this.state.task};
        task.name = event;
        this.setState({ task });
    }

    deleteList = id => {
        var tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks });
    }

    addList = () => {
        console.log('add')
        var list = {...this.state.list};
        console.log(list)
        list.push({name: '', done: false});
        console.log(list)
        this.setState({ list }, console.log('list'))
    }

    render(){
        return (
            <div className='container'>
                    <h5 className="modal-title">Update Task</h5>
                <div className='container'>
                    <form>
                        <div className='form-group'>
                            <label className='col-md-2'>Name</label>
                            <div className='col-md-10'>
                                <input className='form-control' onChange={event => this.changeEvent(event)} value={this.state.task.name}></input>
                            </div>
                        </div>
                        <div>
                            {this.state.task.list.map((list, i) => {
                                return (
                                    <div className='form-group'>
                                        <label className='col-md-2'>Name</label>
                                        <div className='col-md-10'>
                                            <input className='form-control' onChange={event => this.handleList(event, i)} value={list.name}></input>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary' onClick={() => this.addList}>
                                <FontAwesomeIcon icon='plus' />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='container'>
                    <Link to='/'>Back</Link>
                    <button className='btn bnt-success' onClick={() => this.save}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}