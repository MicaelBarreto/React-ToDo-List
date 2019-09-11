import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter  } from 'react-router-dom';
import Touchable from 'rc-touchable';

class UpdateTask extends Component{
    constructor(props){
        super(props);
        
        this.state = {...this.props.task};
    }

    update = () => {
        if(!this.state.name.trim()){
            alert('Invalid data put a description')
            return 
        }
        const data = {...this.state};
        this.props.updateTask(data);
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
            <div className='container'>
                    <h5 className="modal-title">Update Task</h5>
                <div className='container'>
                    <form>
                        <div className='form-group'>
                            <label className='col-md-2'>Name</label>
                            <div className='col-md-9'>
                                <input className='form-control' onChange={event => this.changeEvent(event.target.value)} value={this.state.name}></input>
                            </div>
                        </div>
                        <div>
                            {this.state.list.map((list, i) => {
                                return (
                                    <div className='form-group'>
                                        <label className='col-md-2'>Name</label>
                                        <div className='col-md-10'>
                                            <input className='form-control' onChange={event => this.handleList(event, i)} value={list.name}></input>
                                        </div>
                                        <div className='col-md-1'>
                                            <Touchable onPress={() => this.deleteList(i)} activeClassName=''>
                                                <div className='btn btn-danger'>
                                                    <FontAwesomeIcon icon='trash' />
                                                </div>
                                            </Touchable>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='form-group'>
                            <Touchable onPress={() => this.addList()} activeClassName=''>
                                <div className='btn btn-primary'>
                                    <FontAwesomeIcon icon='plus' />
                                </div>
                            </Touchable>
                        </div>
                    </form>
                    
                </div>
                <div className='container'>
                    <Link to='/'>Back</Link>
                    <Touchable onPress={() => this.update()} activeClassName=''>
                        <div className='btn btn-success'>
                            Add
                        </div>
                    </Touchable>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdateTask);