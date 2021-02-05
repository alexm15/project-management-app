import React, { useState } from 'react';
import styles from '../styles/projectItem.module.scss';
import taskStyle from '../styles/projectTaskItem.module.scss'

export const ProjectTaskItem = ({task}) => {
    const [completed, setCompleted] = useState(false);
    const [name, setName] = useState(task.name);
    const [editMode, setEditMode] = useState(false);
    const [timeSpent, setTimeSpent] = useState(task.timeSpent);

    let taskDetails;
    if (editMode) {
      taskDetails = (
      <span className={styles.itemTaskName}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={taskStyle.input}/>
      </span>
      );
    } else {
      taskDetails = (
        <span className={styles.itemTaskName}>
          <input type="checkbox" name="" id="taskCheckbox1"/>
          <label htmlFor="taskCheckbox1"></label>
          <span>{name} &nbsp;</span>
          <i className="fas fa-chevron-up"></i>
        </span>
      );
      }

      return (
        <li className="projectList-itemTask">
          {taskDetails}
          <span className="projectList-itemTaskTime">{timeSpent}</span>
        </li>
      );

    }

