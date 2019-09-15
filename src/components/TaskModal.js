import React from 'react';
import {
    renderTask
} from '../Common';


const TaskModal = props => {
    const task = props.task;
    const index = props.index;
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
                        {renderTask(index, task)}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={() => props.closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;