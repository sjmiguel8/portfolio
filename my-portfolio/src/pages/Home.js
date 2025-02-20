import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const projects = [
    {
        title: 'ChittChat (Debate Platform)',
        description: 'A fully functional debate platform that has a working login/registration, allows user to create forums, post inside of forums, post status updates on their profile and this is all stored in a database.',
        link: 'https://main.d3r9csobb0rzy.amplifyapp.com/projects/',
        color: '#FF6B6B'
    },
    {
        title: 'Data-Driven Strategy Bot',
        description: 'Web interface that allows users to upload a .csv or .json file, have it parsed, and select from a list of analytic choices to view.',
        link: 'https://v0-ssda.vercel.app/',
        color: '#4ECDC4'
    },
    {
        title: 'Pet Catalog Dashboard',
        description: 'A dashboard for a pet catalog, with NeonDB and MongoDB backend for storing products, users, and orders.',
        link: 'https://dashboard-self-nine-27.vercel.app/dashboard/',
        color: '#45B7D1'
    }
];

const Home = () => {
    return (
        <div>
            <Header />
            <div className="hero-section">
                <h1>Miguel's Portfolio</h1>
                <p className="hero-subtitle">To view some of my deployed projects, click on the projects button below.</p>
                <div className="hero-buttons">
                    <div className="hero-button-container">
                        <a href="/about" className="hero-button">About</a>
                    </div>
                    <div className="hero-button-container">
                        <a href="/projects" className="hero-button">Projects</a>
                    </div>
                    <div className="hero-button-container">
                        <a href="/skills" className="hero-button">Skills</a>
                    </div>
                    <div className="hero-button-container">
                        <a href="/contact" className="hero-button">Contact</a>
                    </div>
                </div>
                
                <section id="projects" className="projects-section">
                    <div className="projects-container">
                        <div className="projects-header">
                            <h2>Projects</h2>
                            <a href="/projects" className="show-more-btn">
                                View All Projects →
                            </a>
                        </div>
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
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                                            View Project
                                            <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
