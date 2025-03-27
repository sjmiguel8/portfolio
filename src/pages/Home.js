import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const projects = [
    {
        title: 'Fashion Fit',
        description: 'This is a web platform that allows users to search for clothing items, and see how they would look on a 3D model. Includes a 3D model viewer and sliders to adjust the mannequin\'s body measurements.',
        link: 'https://fashionfit.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Visual API Composer',
        description: 'A web interface that allows users to create and test API requests visually, and then export them as code. Includes the ability to add headers, query parameters, and request body.',
        link: 'https://apicomposer.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
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
        title: 'Developer Job Search',
        description: 'Real time job search for developers. Three different categories to choose from.',
        link: 'https://devjobsearch.vercel.app/',
        color: '#96CEB4',
        tags: ["React", "Node.js", "APIs", "JavaScript", "HTML", "CSS"]
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
                </section>
            </div>
        </div>
    );
};

export default Home;
