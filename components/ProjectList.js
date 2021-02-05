import React, { useState, useContext } from "react";
import { ProjectsContext } from "../context/ProjectContext";
import styles from "../styles/projectList.module.scss";
import { ProjectItem } from "./ProjectItem";

export const ProjectList = () => {
  const { projects, setProjects } = useContext(ProjectsContext);

  return (
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
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </ul>
  );
};
