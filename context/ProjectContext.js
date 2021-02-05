import React, { useState, createContext } from 'react'

export const ProjectsContext = createContext();

export const ProjectProvider = ({children}) => {
    const [projects, setProjects] = useState([])    
    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
          {children}
        </ProjectsContext.Provider>
    );
}

