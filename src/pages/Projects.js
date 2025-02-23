import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
    {
        title: 'ChittChat (Debate Platform)',
        description: 'A fully functional debate platform that has a working login/registration, allows user to create forums, post inside of forums, post status updates on their profile and this is all stored in a database.',
        link: 'https://chit-chat-alpha-six.vercel.app/',
        color: '#FF6B6B',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Python", "HTML", "CSS", "Supabase", "Terraform"]
    },
    {
        title: 'Data-Driven Strategy Bot',
        description: 'Web interface that allows users to upload a .csv or .json file, have it parsed, and select from a list of analytic choices to view.',
        link: 'https://v0-ssda.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Pet Catalog Dashboard',
        description: 'A dashboard for a pet catalog, with NeonDB and MongoDB backend for storing products, users, and orders.',
        link: 'https://dashboard-self-nine-27.vercel.app/dashboard',
        color: '#45B7D1',
        tags: ["Next.js", "React", "Javascript", "Node.js", "MongoDB", "NeonDB", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Developer Job Search',
        description: 'Real time job search for developers. Three different categories to choose from.',
        link: 'https://devjobsearch.vercel.app/',
        color: '#96CEB4',
        tags: ["React", "Node.js", "APIs", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'ISS Tracker',
        description: 'A real-time tracker for the International Space Station, and real time space news.',
        link: 'https://trix-smoky.vercel.app/',
        color: '#7B68EE',
        tags: ["React", "APIs", "Real-time Data", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Weather App',
        description: 'A simple weather application that provides real-time weather data.',
        link: 'https://tundra-swart.vercel.app/',
        color: '#FF9A8B',
        tags: ["React", "Weather API", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Ginx',
        description: 'A car dealership website, with the backend displaying dealerships.',
        link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/',
        color: '#6C5B7B',
        tags: ["React", "Node.js", "AWS", "Database", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'E Plants',
        description: 'An e-commerce platform for buying and selling plants online.',
        link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/',
        color: '#88D8B0',
        tags: ["React", "E-commerce", "Node.js", "AWS", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Crypto Tracker',
        description: 'A cryptocurrency tracker that provides real-time data on crypto prices.',
        link: 'https://tux-chi.vercel.app/',
        color: '#FFB668',
        tags: ["React", "Crypto API", "Real-time Data", "JavaScript", "HTML", "CSS"]
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <Header />
            <div className="projects-content">
                <h1>All Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                          <div key={index} className="project-card">
                            <div className="project-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                                    <path d="M3 9h18"/>
                                </svg>
                            </div>
                            <div className="project-details">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                                    View Project
                                    <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
