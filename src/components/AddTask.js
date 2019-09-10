import React, {Component} from 'react';
import {

} from 'react-bootstrap';

export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            done: false,
            done_at: new Date(),
        };
    }

    save = () => {
        const data = {...this.state};
        this.props.onSave(data);
    }

    render(){
        return (
            <div className='container'>

            </div>
        );
    }
}