import { Component } from 'react';
import styles from '../styles/projectList.module.scss';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.toggleExpand = this.toggleExpand.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleExpand() {
    const current = this.state.isExpanded;
    this.setState({ isExpanded: !current });
  }

  addTask() {
    //TODO: add task
  }


  render() {
    const { name, dueDate, timeSpent } = this.props.project;
    return (
      <li
        className={`${styles.item} ${styles.item2} ${
          this.state.isExpanded ? styles.itemExpanded : ''
        }`}
        onClick={this.toggleExpand}
      >
        <span>{name}</span>
        <span>{dueDate}</span>
        <span>{timeSpent}</span>
        <i className="fas fa-plus" onClick={this.addTask}></i>
        {this.state.isExpanded &&
            <div className={styles.itemExpandedSection}>
          
            <div className={styles.itemDescription}>
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                quis nisi vero velit cumque eligendi aperiam magnam sunt,
                corporis, quibusdam laudantium ducimus ipsum sint reiciendis sequi
                autem est harum rerum!
              </p>
            </div>
            <ul className={styles.itemTaskList}>
              <li className={styles.itemTaskListHeader}>
                <span className="filter">
                  Tasks &nbsp;<i className="filter-icon fas fa-chevron-down"></i>
                </span>
                <span className="filter">
                  Time &nbsp;<i className="filter-icon fas fa-chevron-down"></i>
                </span>
              </li>
              <li className="projectList-itemTask">
                <span className="projectList-itemTaskName">
                  <input type="checkbox" name="" id="taskCheckbox1" />
                  <label htmlFor="taskCheckbox1"></label>
                  Task 1 &nbsp;
                  <i className="fas fa-chevron-up"></i>
                </span>
                <span className="projectList-itemTaskTime">1:00</span>
              </li>
            </ul>
          </div>
          }
        
      </li>
    );
  }
}

export default ProjectItem;
