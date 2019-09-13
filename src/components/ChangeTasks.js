import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter  } from 'react-router-dom';
import Touchable from 'rc-touchable';

const initialState = { name: '', done: false, list: [
    {id: 0, name: '', done: false},
    {id: 1, name: '', done: false}],
};

class ChangeTasks extends Component{
    constructor(props){
        super(props);
        
        this.state = this.props.location.state.isNew === true ? {...initialState, isNew: this.props.location.state.isNew} : this.props.location.state;
    }

    save = () => {
        if(!this.state.name.trim()){
            alert('Invalid data put a description')
            return 
        }
        const data = {...this.state};
        // improve to update send only padronized data!
        this.props.changeTasks(data);
        this.props.history.push('/');
    }

    handleList = (event, index) => {
        var data = {...this.state.list};
        data[index].name = event.target.value;
        this.setState({ list: Object.values(data) });
    }

    deleteList = id => {
        // Broken - para qualquer index de update e para ultimo index de add
        var list = this.state.list.filter(list => list.id !== id);
        this.setState({ list });
    } 

    addList = () => {
        var list = {...this.state.list};
        list[Object.keys(list).length] = {id: Object.keys(list).length, name: '', done: false};
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
                <h5 className="component-title">{this.state.isNew === true ? 'New' : 'Update'} Task</h5>
                <div className='container'>
                    <form>
                        <div className='form-group'>
                            <label className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>To Do</label>
                            <input className='form-control' onChange={event => this.changeEvent(event.target.value)} value={this.state.name}></input>
                        </div>
                        <div className='form-group'>
                            <label className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>List</label>
                        </div>
                        <div className='offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>
                            {this.state.list.map((list, i) => {
                                var buttonTrash = () => {
                                    if(i > 0){
                                        return(
                                            <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                                                <Touchable onPress={() => this.deleteList(list.id)} activeClassName=''>
                                                    <div className='btn btn-danger'>
                                                        <FontAwesomeIcon icon='trash' />
                                                    </div>
                                                </Touchable>
                                            </div>
                                        );
                                    }
                                }
                                return (
                                    <div className='form-group'>
                                        <label className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>Name</label>
                                        <div className='row'>
                                            <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                                                <input className='form-control' onChange={event => this.handleList(event, i)} value={list.name}></input>
                                            </div>
                                            {buttonTrash()}                                            
                                        </div>
                                    </div>
                                );
                            })}
                            <div className='form-group'>
                                <Touchable onPress={() => this.addList()} activeClassName='active'>
                                    <div className='btn btn-primary'>
                                        <FontAwesomeIcon icon='plus' />
                                    </div>
                                </Touchable>
                            </div>                        
                        </div>
                    </form>
                    
                </div>
                <div className='container'>
                    <div className='row'>
                        <Link to='/' className='btn btn-outline-primary col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                            <FontAwesomeIcon icon='chevron-left' />
                            Back
                        </Link>
                        <button onClick={() => this.save()} className='btn btn-success offset-xs-10 offset-sm-10 offset-md-10 offset-lg-10 col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                            {this.state.isNew === true ? 'Save' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ChangeTasks);