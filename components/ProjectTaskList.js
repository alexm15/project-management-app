import React, { useState } from 'react';
import styles from '../styles/projectItem.module.scss';
import ProjectTaskItem from './ProjectTaskItem';

export const ProjectTaskList = ({taskList}) => {

    return (
      <ul className={styles.itemTaskList}>
        <li className={styles.itemTaskListHeader}>
          <span className="filter">
            Tasks &nbsp;
            <i className="filter-icon fas fa-chevron-down"></i>
          </span>
          <span className="filter">
            Time &nbsp;<i className="filter-icon fas fa-chevron-down"></i>
          </span>
        </li>
        {taskList.map((task) => (
          <ProjectTaskItem task={task} key={task.id} />
        ))}
      </ul>
    );
};

