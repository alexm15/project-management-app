import React, { useContext, useEffect } from "react";
import { ProjectsContext } from "../context/ProjectContext";
import { Layout } from "../components/Layout";
import { ProjectList } from "../components/ProjectList";
import {AddProject} from '../components/AddProject'

function fetchProjectItems() {
  return [
    {
      id: 1,
      name: "Project 1",
      dueDate: "01/03/2020",
      timeSpent: "15:30",
      description: "",
      taskList: [],
    },
    {
      id: 2,
      name: "Project 2",
      dueDate: "12/12/2021",
      timeSpent: "00:00",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              quis nisi vero velit cumque eligendi aperiam magnam sunt, corporis,
              quibusdam laudantium ducimus ipsum sint reiciendis sequi autem est
              harum rerum!`,
      taskList: [{ id: 1, name: "Task 1", timeSpent: "1:00", completed: true }],
    },
  ];
}

export async function getServerSideProps(context) {
  const projectItems = fetchProjectItems();
  return {
    props: {
      projectItems,
    }, // will be passed to the page component as props
  };
}

const ProjectsPage = ({ projectItems }) => {
  const { setProjects } = useContext(ProjectsContext);

  useEffect(() => {
    setProjects(projectItems);
  }, []);

  return (
    <Layout>
      <>
        <div className="mainArea-item">
          <div className="mainArea-itemHeader">
            <h3>Projects:</h3>
            <AddProject />
            
          </div>
          <div className="mainArea-itemBody">
            <ProjectList />
          </div>
        </div>
        <div className="mainArea-item">
          <div className="mainArea-itemHeader">
            <h3>Summary:</h3>
          </div>
          <div className="mainArea-itemBody"></div>
        </div>
      </>
    </Layout>
  );
};

export default ProjectsPage;
