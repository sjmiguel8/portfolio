import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const featuredProjects = [
    {
        iframe: <iframe src="https://devsspark.vercel.app/" title="Featured Project 1" width="560" height="315" frameBorder="0" allowFullScreen></iframe>,
        title: 'Featured Project 1',
        description: 'Developed DevSpark, a comprehensive web application designed to facilitate the creation and management of developer portfolios. The platform allows users to create, edit, and delete their portfolios, showcasing their skills and projects. This project highlights expertise in full-stack development, including user authentication, data management, and responsive design.',
        link: 'https://devsspark.vercel.app/',
        color: '#FF6B6B',
        tags: ["React", "Node.js", "JavaScript"]
    },
    {
        iframe: <iframe src="https://devsparkshub.vercel.app/" title="Featured Project 2" width="560" height="315" frameBorder="0" allowFullScreen></iframe>,
        title: 'Featured Project 2',
        description: 'Create single or multi-page websites with customizable sections, themes, and content. The platform allows users to generate websites tailored to their needs, showcasing skills in front-end development and user experience design. This project emphasizes the ability to create user-friendly tools for website generation.',
        link: 'https://devsparkshub.vercel.app/',
        color: '#FF6B6B',
        tags: ["React", "Node.js", "JavaScript"]
    },
];
const projects = [
    {
        title: 'ChitChat',
        description: 'Engineered ChittChat, a fully functional debate platform featuring secure user login/registration, forum creation and participation, and user profile status updates. Implemented a robust backend system using Supabase for data storage, demonstrating full-stack development capabilities. This project emphasizes skills in database management, user authentication, and building interactive community platforms.',
        link: 'https://chit-chat-alpha-six.vercel.app/',
        color: '#FF6B6B',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Python", "HTML", "CSS", "Supabase", "Terraform"]
    },
    {
        title: 'DevSpark',
        description: 'Developed DevSpark, a comprehensive web application designed to facilitate the creation and management of developer portfolios. The platform allows users to create, edit, and delete their portfolios, showcasing their skills and projects. This project highlights expertise in full-stack development, including user authentication, data management, and responsive design.',
        link: 'https://devsspark.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'DevSparkGenerator',
        description: 'Create single or multi-page websites with customizable sections, themes, and content. The platform allows users to generate websites tailored to their needs, showcasing skills in front-end development and user experience design. This project emphasizes the ability to create user-friendly tools for website generation.',
        link: 'https://devsparkshub.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Data-Driven Strategy Bot',
        description: 'Developed a web application that enables users to upload and parse CSV or JSON files and perform various data analysis tasks. The Data-Driven Strategy Bot provides users with a selection of analytical tools to gain insights from their data. This project demonstrates skills in data processing, front-end development, and creating tools for data visualization.',
        link: 'https://v0-ssda.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Developer Job Search',
        description: 'Created a real-time job search application specifically for developers. The application aggregates and displays job listings across three categories, providing a valuable tool for job seekers in the tech industry. This project demonstrates skills in API integration and front-end development.',
        link: 'https://devjobsearch.vercel.app/',
        color: '#96CEB4',
        tags: ["React", "Node.js", "APIs", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Fashion Fit',
        description: 'Developed a web-based platform, Fashion Fit, enabling users to visualize clothing items on a 3D model. Implemented a 3D model viewer with interactive controls, allowing users to adjust the mannequin\'s measurements. This project showcases skills in front-end development, including React and Next.js, and demonstrates the ability to create user-friendly and interactive e-commerce tools.',
        link: 'https://fashionfit.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Visual API Composer',
        description: 'Designed and built a Visual API Composer, a web interface that empowers users to create and test API requests visually. The application facilitates efficient API development by providing tools to add headers, query parameters, and request bodies, and export the configured requests as code. This project highlights expertise in front-end development and user interface design.',
        link: 'https://apicomposer.vercel.app/',
        color: '#4ECDC4',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
    },
    {
        title: 'Pet Catalog Dashboard',
        description: 'Built a comprehensive Pet Catalog Dashboard for managing products, users, and orders. Implemented both NeonDB and MongoDB backends to provide a robust and scalable data storage solution. This project showcases full-stack development skills, including database design and dashboard creation.',
        link: 'https://dashboard-self-nine-27.vercel.app/dashboard',
        color: '#45B7D1',
        tags: ["Next.js", "React", "Javascript", "Node.js", "MongoDB", "NeonDB", "Typescript", "HTML", "CSS"]
    }
];

const Home = () => {
    return (
        <>
        <div>
            <Header />
            <div className="hero-section">
                <h1>Miguel's Portfolio</h1>
                <p className="hero-subtitle">My deployed projects are available for viewing via the 'Projects' button below.</p>
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
                    

                <section id="featured-projects" className="featured-projects-section">
                    <div className="featured-projects-container">
                        <div className="featured-projects-header">
                            <h2>Featured Projects</h2>
                            <div className="responsive-iframe-wrapper">
                                <iframe src="https://devsspark.vercel.app/" title="Featured Project 1" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="responsive-iframe-wrapper">
                                <iframe src="https://devsparkshub.vercel.app/" title="Featured Project 2" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                        
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
    </>
    );
};
export default Home;