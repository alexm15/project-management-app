import React, { useState } from 'react';
import styles from '../styles/projectItem.module.scss';
import taskStyle from '../styles/projectTaskItem.module.scss'
import { Editable } from './Editable'

export const ProjectTaskItem = ({task}) => {
    const [completed, setCompleted] = useState(task.completed);
    const [name, setName] = useState(task.name);
    const [editMode, setEditMode] = useState(false);
    const [timeSpent, setTimeSpent] = useState(task.timeSpent);
    const [showEditMode, setShowEditMode] = useState(false);


    const changeComplete = e => {
      e.stopPropagation();
      setCompleted(e.target.checked);
    }

    const editField = <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={taskStyle.input}/>;
    const taskLine = (
      <>
        <input type="checkbox" name="" id="taskCheckbox1" checked={completed} onChange={changeComplete}/>
        <label htmlFor="taskCheckbox1"></label>
        <span>{name} &nbsp;</span>
        <i className="fas fa-chevron-up"></i>
      </>
    );

    return (
      <li className="projectList-itemTask">
        <Editable inline={true} header={taskLine} style={styles.itemTaskName} editableHeader={editField}/>
        <span className="projectList-itemTaskTime">{timeSpent}</span>
      </li>
    );

}

