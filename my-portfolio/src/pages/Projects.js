import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
    {
        title: 'Ginx',
        description: 'A modern web portfolio showcasing my professional work and skills.',
        link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/'
    },
    {
        title: 'e-plant-shopping',
        description: 'An e-commerce platform for buying and selling plants online.',
        link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/'
    },
    {
        title: 'crypto-tracker',
        description: 'A cryptocurrency tracker that provides real-time data on crypto prices.',
        link: 'https://tux-chi.vercel.app/'
    },
    {
        title: 'ChooseWisely',
        description: 'A decision-making application helping users make informed choices.',
        link: 'https://main.d2n5cghagdyuz8.amplifyapp.com/'
    },
    {
        title: 'weather-app',
        description: 'A weather application that provides real-time weather data.',
        link: 'https://tundra-swart.vercel.app/'
    },
    {
        title: 'CrimeMapper',
        description: 'A visualization tool for mapping and analyzing crime data.',
        link: 'http://crimemapper.s3-website.us-east-2.amazonaws.com/'
    },
    {
        title: 'DoR',
        description: 'TBD',
        link: 'https://main.da8dp7tleik2e.amplifyapp.com/'
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
