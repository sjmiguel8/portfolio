import React from 'react';

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
            <h1>My Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;