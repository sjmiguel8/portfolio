import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
    {
        title: 'Project One',
        description: 'Description of project one.',
        link: 'http://example.com/project-one'
    },
    {
        title: 'Project Two',
        description: 'Description of project two.',
        link: 'http://example.com/project-two'
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div>
            <Header />
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;