import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import TaskModal from './TaskModal';
import {
    all,
    handleDone,
    deleteTask,
    renderTask,
    sortColor
} from '../Common';

function Task(props) {

    const [tasks, setTasks] = useState(all);
    const [showModal, setModal] = useState(false);
    const [index, setIndex] = useState(0);

    const clickDelete = useCallback(
        (id) => {
            deleteTask(id);
            setTasks(all);
            setModal(false);
        },
        [tasks],
    )
    
    function selectUpdate(i) {
        props.history.push({
            pathname: '/update',
            state: {
                isNew: false,
                index,
            }
        });
    }

    //Arrumar update
    //Mais testes

    //chamando sempre
    function toggleModal(i, selectedTask) {
        console.log('entrou')
        setIndex(i);
        setModal(true);
    }

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
                        {tasks.map((tk, i) => {
                            return (
                                <tr className='row' onClick={() => toggleModal(i, tk)}>
                                    <td className='col-xs-2 col-sm-2 col-md-2 col-lg-2 middle-alignment'>
                                        <button onClick={() => handleDone(i)} className='btn'>
                                            <FontAwesomeIcon icon="check-circle" color={sortColor(tk)} size='4x' />
                                        </button>
                                    </td>
                                    <td className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>                                        
                                        <div className='container offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>
                                            {renderTask(i)}
                                        </div>
                                    </td>
                                    <td className='col-xs-2 col-sm-2 col-md-2 col-lg-2 middle-alignment'>
                                        <div className='container'>
                                            <div className='row'>
                                                <button className='btn btn-outline-primary col-xs-12 col-sm-12 col-md-12 col-lg-12' onClick={() => selectUpdate(i)}>
                                                    <FontAwesomeIcon icon='edit' />
                                                    Update
                                                </button>                                                    
                                            </div>
                                            <div className='row'>
                                                <button className='btn btn-outline-danger col-xs-12 col-sm-12 col-md-12 col-lg-12' onClick={() => clickDelete(tk.id)}>
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
            { showModal ? <TaskModal 
                show={showModal}
                closeModal={() => setModal(false)}
                index={index} /> : null }
        </div>
    );
}

export default withRouter(Task);