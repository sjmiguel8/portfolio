import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
    {
        title: 'FlutterTry',
        description: 'AI with a task manager, document analysis, image emotion recognition, simple memory game, and more.',
        link: 'http://fluttertryweb.s3-website.us-east-2.amazonaws.com/'
    },
    {
        title: 'Book Chatter & Dream Analysis',
        description: 'Different  chatbots based off famous book characters, chat with some of your faorite characters, or you can try the dream and psychoanalysis bot.',
        link: 'http://bookchatter.s3-website.us-east-2.amazonaws.com/'
    },
    {
        title: 'Socrates S',
        description: 'A sophisticated system for managing and tracking educational progress.',
        link: 'http://socratess.s3-website.us-east-2.amazonaws.com/login/'
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