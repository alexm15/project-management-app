import { Component } from 'react';
import styles from '../styles/projectItem.module.scss';

class ProjectTaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isCompleted : props.completed
    }
  }

  render() {
    const {name, timeSpent} = this.props.task;
    return (
        <li className="projectList-itemTask">
          <span className={styles.itemTaskName}>
            <input type="checkbox" name="" id="taskCheckbox1" />
            <label htmlFor="taskCheckbox1"></label>
            {name} &nbsp;
            <i className="fas fa-chevron-up"></i>
          </span>
          <span className="projectList-itemTaskTime">{timeSpent}</span>
        </li>
    );
  }
}

export default ProjectTaskList;
