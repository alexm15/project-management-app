import React, { useContext, useState } from 'react';
import styles from '../styles/projectItem.module.scss';
import { ProjectTaskList } from './ProjectTaskList';
import { Editable } from './Editable';

export const ProjectItem = ({ project }) => {
  const [expanded, setExpand] = useState(false);
  const { name, dueDate, timeSpent, description, taskList } = project;
  const [editMode, setEditMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);

  // const [tasks, setTasks] = useContext(ProjectContext)
  
  

  const addTask = () => {
    // TODO: add task
    console.log("Clicked addTask");
  };

  const itemStyle = `${styles.item} ${styles.item2} ${
    expanded ? styles.itemExpanded : ''
  }`;

  return (
    <li className={itemStyle} onClick={() => setExpand(!expanded)}>
      <Editable inline={true} header={name} />
      <Editable inline={true} header={dueDate} />
      <span>{timeSpent}</span>
      <i className="fas fa-plus" onClick={addTask} />
      {expanded && (
        <div className={styles.itemExpandedSection}>
          <Editable style={styles.itemDescription} header={<h4 style={{display: 'inline-block'}}>Description</h4>}>
            <p>{description}</p>
          </Editable>
          {/* <div className={styles.itemDescription}>
            <h4>Description</h4>
            <p>{description}</p>
          </div> */}
          <ProjectTaskList taskList={taskList} />
        </div>
      )}
    </li>
  );
};
