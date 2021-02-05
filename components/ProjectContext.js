import React, { useState, createContext } from 'react'

export const ProjectsContext = createContext();


export const ProjectProvider = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Project 1',
            dueDate: '01/03/2020',
            timeSpent: '15:30',
            description: '',
            taskList: [],
          },
          {
            id: 2,
            name: 'Project 2',
            dueDate: '12/12/2021',
            timeSpent: '00:00',
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                    quis nisi vero velit cumque eligendi aperiam magnam sunt, corporis,
                    quibusdam laudantium ducimus ipsum sint reiciendis sequi autem est
                    harum rerum!`,
            taskList: [{ id: 1, name: 'Task 1', timeSpent: '1:00', completed: true }],
          },
    ])
    
    return (
        <></>
    );
}

