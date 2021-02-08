import React, { useContext } from 'react'
import { ProjectsContext } from '../context/ProjectContext'

export const AddProject = () => {
    const { projects, setProjects } = useContext(ProjectsContext);

    const addProject = () => {
        const ids = projects.map(p => p.id);
        let currentMaxId = Math.max(...ids);

        const newProject = {
            id: currentMaxId++,
            name: "",
            dueDate: "",
            timeSpent: "00:00",
            description: ``,
            taskList: [],
        }

        const currentProjects = [...projects];
        currentProjects.push(newProject);
        setProjects(currentProjects)
    }

    return (
        <button className="button button--primary" onClick={addProject}>New Project</button>
    )
}
