import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
      {
        title: 'Debate.com',
        description: 'A fully functional debate platform that allows users to create posts, login, post status updates.',
        link: 'https://chit-chat-alpha-six.vercel.app/',
        color: '#FF6B6B'
      },
      {
        title: 'Data Driven Analytics Bot',
        description: 'Upload a .csv or .json file, have it parsed, and select from a list of analytic choices.',
        link: 'https://v0-ssda.vercel.app/',
        color: '#4ECDC4'
      },
      {
        title: 'Pet Catalog Dashboard',
        description: 'A dashboard for a pet catalog, with NeonDB and MongoDB backend.',
        link: 'https://dashboard-self-nine-27.vercel.app/dashboard',
        color: '#45B7D1'
      },
      {
        title: 'Developer Job Search',
        description: 'Real time job search for developers. Three different categories to choose from.',
        link: 'https://devjobsearch.vercel.app/',
        color: '#96CEB4'
      },
      {
        title: 'ISS Tracker',
        description: 'A real-time tracker for the International Space Station, and real time space news.',
        link: 'https://trix-smoky.vercel.app/',
        color: '#7B68EE'
      },
      {
        title: 'Weather App',
        description: 'A simple weather application that provides real-time weather data.',
        link: 'https://tundra-swart.vercel.app/',
        color: '#FF9A8B'
      },
      {
        title: 'Ginx',
        description: 'A car dealership website, with the backend displaying dealerships.',
        link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/',
        color: '#6C5B7B'
      },
      {
        title: 'E Plants',
        description: 'An e-commerce platform for buying and selling plants online.',
        link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/',
        color: '#88D8B0'
      },
      {
        title: 'Crypto Tracker',
        description: 'A cryptocurrency tracker that provides real-time data on crypto prices.',
        link: 'https://tux-chi.vercel.app/',
        color: '#FFB668'
      },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <Header />
            <div className="projects-content">
                <h1>Featured Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{'--accent-color': project.color}}>
                            <div className="project-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                                    <path d="M3 9h18"/>
                                </svg>
                            </div>
                            <div className="project-details">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
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
