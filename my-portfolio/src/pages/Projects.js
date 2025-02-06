import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
    {
        title: 'Developer Job Search',
        description: 'Job listings for Houston developers in software, devops, and fullstack.',
        link: 'https://nextjs-boilerplate-virid-eight-41.vercel.app/'
      },
      {
        title: 'Weather App',
        description: 'A weather application that provides real-time weather data.',
        link: 'https://tundra-swart.vercel.app/'
      },
      {
        title: 'Ginx',
        description: 'A modern web portfolio showcasing my professional work and skills.',
        link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/'
      },
      {
        title: 'E Plants',
        description: 'An e-commerce platform for buying and selling plants online.',
        link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/'
      },
      {
        title: 'Crypto Tracker',
        description: 'A cryptocurrency tracker that provides real-time data on crypto prices.',
        link: 'https://tux-chi.vercel.app/'
      },
];

const Projects = () => {
    return (
        <div>
            <Header />
            <div className="projects-list">
                <h1>Projects</h1>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
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
