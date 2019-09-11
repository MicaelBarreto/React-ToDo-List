import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';

const initialState = { name: '', done: false, list: [
    {name: '', done: false},
    {name: '', done: false}
] }

export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    save = () => {
        if(!this.state.name.trim()){
            alert('Invalid data put a description')
            return 
        }
        const data = {...this.state};
        this.props.onSave(data);
        //<Redirect to='/' />
    }

    handleList = (event, index) => {
        var data = {...this.state.list};
        data[index].nome = event;
        this.setState({ list: data });
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

    changeEvent = event => {
        var task = {...this.state.task};
        task.name = event;
        this.setState({ task });
    }

    render(){
        return (
            <div className='container'>
                    <h5 className="modal-title">New Task</h5>
                <div className='container'>
                    <form>
                        <div className='form-group'>
                            <label className='col-md-2'>Name</label>
                            <div className='col-md-10'>
                                <input className='form-control' onChange={event => this.changeEvent(event)}></input>
                            </div>
                        </div>
                        <div>
                            {this.state.list.map((list, i) => {
                                return (
                                    <div className='form-group'>
                                        <label className='col-md-2'>Name</label>
                                        <div className='col-md-10'>
                                            <input className='form-control' onChange={event => this.handleList(event, i)}></input>
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