import React, { Component } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialState = { name: '', done: false, modal: false}

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
        this.setState({ done });
    }

    render(){
        return (
            <Modal
                isOpen={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                ariaHideApp={false}
            >
               <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Task</h5>
                            <button className='close' onClick={() => this.props.onCancel}></button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <div className='form-group'>
                                    <label className='col-md-12'>Name</label>
                                    <div className='col-md-10'>
                                        <input className='form-control' onChange={event => this.setState({ name: event })}></input>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <input class="form-check-input" type="checkbox" onChange={() => this.check} />
                                    <label class="form-check-label">
                                        Is done?
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => this.props.onCancel}>Close</button>
                            <button className='btn bnt-success' onClick={() => this.save}>
                                <FontAwesomeIcon icon="plus" />
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}