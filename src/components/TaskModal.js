import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TaskModal = props => {    
    return (
        <div className="modal-backdrop" id="exampleModal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.closeModal()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h3>{props.task.name}</h3>
                        <div className='offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1'>                                                
                            {props.task.list.map((list, i) => {
                                return(
                                    <div className='row'>
                                        {/*<button onClick={() => props.handleDoneList(props.index, i)} className='btn'>*/}
                                        <ul className="list-inline">
                                            <li className='list-inline-item'>
                                                <FontAwesomeIcon icon="check-circle" color={props.sortColor(props.index, list)} size='lg' /> 
                                            </li>
                                            <li className='list-inline-item'>
                                                {list.name}
                                            </li>
                                        </ul>                                                              
                                        {/*</button>*/}
                                    </div>                                                               
                                );
                            })}
                        </div> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;