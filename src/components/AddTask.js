import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter  } from 'react-router-dom';
import Touchable from 'rc-touchable';

const initialState = { name: '', done: false, list: [
    {name: '', done: false},
    {name: '', done: false}
] }

class AddTask extends Component{
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
        this.props.addTask(data);
        this.props.history.push('/');
    }

    handleList = (event, index) => {
        var data = {...this.state.list};
        data[index].name = event.target.value;
        this.setState({ list: Object.values(data) });
    }

    deleteList = id => {
        var list = this.state.list.filter((value, index) => index !== id);
        this.setState({ list });
    }

    addList = () => {
        var list = {...this.state.list};
        list[Object.keys(list).length] = {name: '', done: false};
        this.setState({ list: Object.values(list) })
    }    

    changeEvent = event => {
        var name = {...this.state.name};
        name = event;
        this.setState({ name });
    }

    render(){
        return (
            <div className='container inner-content'>
                <h5 className="component-title">New Task</h5>
                <div className='container'>
                    <form>
                        <div className='form-group'>
                            <label className='col-md-2'>To Do</label>
                            <input className='form-control' onChange={event => this.changeEvent(event.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label className='col-md-2'>List</label>
                        </div>
                        <div className='offset-md-1'>
                            {this.state.list.map((list, i) => {
                                return (
                                    <div className='form-group'>
                                        <label className='col-md-2'>Name</label>
                                        <div className='row'>
                                            <div className='col-md-11'>
                                                <input className='form-control' onChange={event => this.handleList(event, i)}></input>
                                            </div>
                                            <div className='col-md-1'>
                                                <Touchable onPress={() => this.deleteList(i)} activeClassName=''>
                                                    <div className='btn btn-danger'>
                                                        <FontAwesomeIcon icon='trash' />
                                                    </div>
                                                </Touchable>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className='form-group'>
                                <Touchable onPress={() => this.addList()} activeClassName=''>
                                    <div className='btn btn-primary'>
                                        <FontAwesomeIcon icon='plus' />
                                    </div>
                                </Touchable>
                            </div>                        
                        </div>
                    </form>
                    
                </div>
                <div className='container'>
                    <Link to='/'>Back</Link>
                    <Touchable onPress={() => this.save()} activeClassName=''>
                        <div className='btn btn-success'>
                            Add
                        </div>
                    </Touchable>
                </div>
            </div>
        );
    }
}

export default withRouter(AddTask);