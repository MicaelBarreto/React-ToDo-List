import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter  } from 'react-router-dom';
import Touchable from 'rc-touchable';
import {
    addTask
} from '../Common';

const initialState = { name: '', done: false, list: [
    {id: 0, name: '', done: false},
    {id: 1, name: '', done: false}],
};

function ChangeTasks(props) {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isNew, setNew] = useState(true);
    
    useEffect(() => {        
        if(props.location.state.isNew === false){
            setName(props.location.state.name);
            setList(props.location.state.list);
            setNew(false);
        }else{
            setName(initialState.name);
            setList(initialState.list);
        }
    }, []);

    function save() {
        if(!name.trim()){
            alert('Invalid data put a description')
            return 
        }
        const data = {
            name,
            done: false,
            list
        };

        if(isNew){
            addTask(data);
        }else{

        }
        //props.changeTasks(data);
        props.history.push('/');
    }

    function handleList(event, index) {
        var data = {...list};
        data[index].name = event.target.value;
        setList(Object.values(data));
    }

    return (
        <div className='container inner-content'>
            <h5 className="component-title">{isNew === true ? 'New' : 'Update'} Task</h5>
            <div className='container mb-5'>
                <form>
                    <div className='form-group'>
                        <label className='col-xs-2 col-sm-2 col-md-2 col-lg-2 lead'>To Do</label>
                        <input className='form-control' onChange={event => setName(event.target.value)} value={name}></input>
                    </div>
                    <div className='form-group'>
                        <label className='col-xs-2 col-sm-2 col-md-2 col-lg-2 lead'>List</label>
                    </div>
                    <div className='offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>
                        {list.map((data, i) => {
                            var buttonTrash = () => {
                                if(i > 0){
                                    return(
                                        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                                            <Touchable onPress={() => setList(list.filter(list => list.id !== data.id))} activeClassName=''>
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
                                            <input className='form-control' onChange={event => handleList(event, i)} value={data.name}></input>
                                        </div>
                                        {buttonTrash()}                                            
                                    </div>
                                </div>
                            );
                        })}
                        <div className='form-group'>
                            <Touchable onPress={() => setList([...list, { id: list.length, name: '', done: false }])} activeClassName='active'>
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
                    <button onClick={() => save()} className='btn btn-success offset-xs-10 offset-sm-10 offset-md-10 offset-lg-10 col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                        {isNew === true ? 'Save' : 'Update'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ChangeTasks);