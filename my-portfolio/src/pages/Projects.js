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
        description: 'Different chatbots based off famous book characters, chat with some of your favorite characters, or try the dream and psychoanalysis bot.',
        link: 'http://bookchatter.s3-website.us-east-2.amazonaws.com/'
    },
    {
        title: 'Socrates S',
        description: 'A sophisticated system for managing and tracking educational progress.',
        link: 'http://socratess.s3-website.us-east-2.amazonaws.com/login/'
    },
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
        title: 'slime',
        description: 'An interactive web game featuring slime physics and animations.',
        link: 'https://main.d2409w8ghk72v2.amplifyapp.com/'
    },
    {
        title: 'ChooseWisely',
        description: 'A decision-making application helping users make informed choices.',
        link: 'https://main.d2n5cghagdyuz8.amplifyapp.com/'
    },
    {
        title: 'fullstack',
        description: 'A comprehensive full-stack web application demonstration.',
        link: 'https://main.d292ubbvg4ueuu.amplifyapp.com/'
    },
    {
        title: 'OrganizeBot',
        description: 'An AI-powered organization and productivity tool.',
        link: 'http://fluttertryweb.s3-website.us-east-2.amazonaws.com/'
    },
    {
        title: 'CrimeMapper',
        description: 'A visualization tool for mapping and analyzing crime data.',
        link: 'http://crimemapper.s3-website.us-east-2.amazonaws.com/'
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
