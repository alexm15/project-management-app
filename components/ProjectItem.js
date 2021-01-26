import { Component } from 'react';
import styles from '../styles/projectItem.module.scss';
import ProjectTaskList from './ProjectTaskList';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.toggleExpand = this.toggleExpand.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleExpand() {
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  }

  addTask() {
    //TODO: add task
  }

  render() {
    const { name, dueDate, timeSpent, description, taskList } = this.props.project;
    return (
      <li className={`${styles.item} ${styles.item2} ${this.state.isExpanded ? styles.itemExpanded : ''}`} onClick={this.toggleExpand}>
        <span>{name}</span>
        <span>{dueDate}</span>
        <span>{timeSpent}</span>
        <i className="fas fa-plus" onClick={this.addTask}></i>
        {this.state.isExpanded && (
          <div className={styles.itemExpandedSection}>
            <div className={styles.itemDescription}>
              <h4>Description</h4>
              <p>{description}</p>
            </div>
            <ProjectTaskList taskList={taskList}/>
          </div>
        )}
      </li>
    );
  }
}

export default ProjectItem;
