import React, { useState } from 'react';
import styles from '../styles/projectItem.module.scss';
import { ProjectTaskList } from './ProjectTaskList';

export const ProjectItem = ({ project }) => {
  const [expanded, setExpand] = useState(false);
  const { name, dueDate, timeSpent, description, taskList } = project;
  
  

  const addTask = () => {
    //TODO: add task
  };

  const itemStyle = `${styles.item} ${styles.item2} ${
    expanded ? styles.itemExpanded : ''
  }`;

  return (
    <li className={itemStyle} onClick={() => setExpand(!expanded)}>
      <span>{name}</span>
      <span>{dueDate}</span>
      <span>{timeSpent}</span>
      <i className="fas fa-plus" onClick={addTask}></i>
      {expanded && (
        <div className={styles.itemExpandedSection}>
          <div className={styles.itemDescription}>
            <h4>Description</h4>
            <p>{description}</p>
          </div>
          <ProjectTaskList taskList={taskList} />
        </div>
      )}
    </li>
  );
};
