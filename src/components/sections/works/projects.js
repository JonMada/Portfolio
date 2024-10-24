import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import projectData from '../../../data/project.js'; 

const Projects = ({ selectedTechnologies }) => {
    const navigate = useNavigate();
    const [hoveredProject, setHoveredProject] = useState(null); 

    const handleProjectClick = (project) => {
        navigate(`/project/${project.id}`, { state: { project } }); 
    };

    const filterProjects = () => {
        if (selectedTechnologies.length === 0) {
            return projectData;
        }

        return projectData.filter(project => 
            selectedTechnologies.every(tech => 
                project.technologies.frontend.includes(tech) || 
                project.technologies.backend.includes(tech)
            )
        );
    };

    const filteredProjects = filterProjects();

    return (
        <div>
            {filteredProjects.length === 0 ? (
                <div className="no-projects-message">
                    <p>No projects available with this criteria. Please check back later!</p>
                </div>
            ) : (
                <div className="projects-container">
                    {filteredProjects.map((project) => (
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
            )}
        </div>
    );
};

export default Projects;
