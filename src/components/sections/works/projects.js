import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import projectData from '../../../data/project.js'; 

const Projects = () => {
    const navigate = useNavigate();
    const [hoveredProject, setHoveredProject] = useState(null); 

    const handleProjectClick = (project) => {
        navigate(`/project/${project.id}`, {state: {project}}) ; 
    };

    return (
        <div className="projects-container">
            {projectData.map((project) => (
                <div 
                    key={project.id} 
                    className="project-card" 
                    onClick={() => handleProjectClick(project)} 
                    onMouseEnter={() => setHoveredProject(project.id)} 
                    onMouseLeave={() => setHoveredProject(null)} 
                >
                    <p>{project.title}</p>
                    <img 
                        src={project.screenshots[0].url} 
                        alt={project.screenshots[0].caption} 
                    />
                    {hoveredProject === project.id && (
                        <div className="project-description">
                            {project.description} 
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Projects;  
