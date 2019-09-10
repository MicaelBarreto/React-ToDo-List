import React, { Component } from 'react';
import Modal from 'react-modal';

const initialState = { name: '', done: false, done_at: '', modal: false}

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
        this.setState({...initialState});
    }

    check = () => {
        var done = {...this.state.done};
        done = done === false ? true : false;
        done_at = done === true ? new Date() : ''
        this.setState({ done, done_at });
    }

    render(){
        return (
            <Modal
                isOpen={this.state.modal}
                onRequestClose={this.setState({ modal: false })}
            >
                <div className='container'>
                    <h2>New Task</h2>
                    <form className=''>
                        <div className='form-control'>
                            <label className='col-md-12'>Name</label>
                            <div className='col-md-10'>
                                <input className='form-control' onChange={event => this.setState({ name: event })}></input>
                            </div>
                        </div>
                        <div className='form-control'>
                            <input type='checkbox' className='col-md-12 form-control' onChange={() => this.check}></input>
                        </div>
                        <div className='form-control'>
                            <button className='btn bnt-success' onClick={() => this.save}>Add</button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}