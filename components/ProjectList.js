import styles from '../styles/projectList.module.scss';
import ProjectItem from './ProjectItem';




const ProjectList = ({ projectItems }) => (
  <ul className={styles.projectList}>
    <li className={styles.header}>
      <span className="filter">
        Name &nbsp;<i className="filter-icon fas fa-chevron-down"></i>
      </span>
      <span className="filter">
        Due Date &nbsp;<i className="filter-icon fas fa-chevron-down"></i>
      </span>
      <span className="filter">
        Time Spent &nbsp;<i className="filter-icon fas fa-chevron-down"></i>
      </span>
    </li>
    {projectItems.map((project) => (
      <ProjectItem project={project} key={project.id} />
    ))}
  </ul>
);

export default ProjectList;
