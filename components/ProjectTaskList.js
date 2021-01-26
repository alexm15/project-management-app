import { Component } from 'react';
import styles from '../styles/projectItem.module.scss';
import ProjectTaskItem from './ProjectTaskItem';

class ProjectTaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskList = this.props.taskList;
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
  }
}

export default ProjectTaskList;
