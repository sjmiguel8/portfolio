import React from 'react';
import Header from '../../components/Header';
import './ProjectCard.module.css';
import '../../styles/Projects.css';

const projects = [
    {
        title: 'ChitChat',
        description: 'Engineered ChittChat, a fully functional debate platform featuring secure user login/registration, forum creation and participation, and user profile status updates. Implemented a robust backend system using Supabase for data storage, demonstrating full-stack development capabilities. This project emphasizes skills in database management, user authentication, and building interactive community platforms.',
        link: 'https://chit-chat-alpha-six.vercel.app/',
        color: '#FF6B6B',
        tags: ["Next.js", "React", "Javascript", "Node.js", "Python", "HTML", "CSS", "Supabase", "Terraform"]
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
        title: 'Pet Catalog Dashboard',
        description: 'Built a comprehensive Pet Catalog Dashboard for managing products, users, and orders. Implemented both NeonDB and MongoDB backends to provide a robust and scalable data storage solution. This project showcases full-stack development skills, including database design and dashboard creation.',
        link: 'https://dashboard-self-nine-27.vercel.app/dashboard',
        color: '#45B7D1',
        tags: ["Next.js", "React", "Javascript", "Node.js", "MongoDB", "NeonDB", "Typescript", "HTML", "CSS"]
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
        title: 'ISS Tracker',
        description: 'Developed a real-time International Space Station tracker and integrated a space news feed. This application provides users with up-to-date information on the ISS and space-related events, showcasing skills in working with real-time data and APIs.',
        link: 'https://trix-smoky.vercel.app/',
        color: '#7B68EE',
        tags: ["React", "APIs", "Real-time Data", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Weather App',
        description: 'Designed and implemented a user-friendly weather application that delivers real-time weather data. This project demonstrates proficiency in front-end development and API integration.',
        link: 'https://tundra-swart.vercel.app/',
        color: '#FF9A8B',
        tags: ["React", "Weather API", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Ginx',
        description: 'Built a car dealership website, Ginx, with a backend system for managing dealership information. This project highlights full-stack development skills, including front-end design and backend database integration.',
        link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/',
        color: '#6C5B7B',
        tags: ["React", "Node.js", "AWS", "Database", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'E Plants',
        description: 'Developed E Plants, an e-commerce platform for buying and selling plants online. This project showcases skills in building e-commerce applications, including front-end development and potentially order management and product catalog features.',
        link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/',
        color: '#88D8B0',
        tags: ["React", "E-commerce", "Node.js", "AWS", "JavaScript", "HTML", "CSS"]
    },
    {
        title: 'Crypto Tracker',
        description: 'Created a cryptocurrency tracker that provides users with real-time data on cryptocurrency prices and market trends. This project demonstrates skills in working with real-time data, APIs, and front-end development.',
        link: 'https://tux-chi.vercel.app/',
        color: '#FFB668',
        tags: ["React", "Crypto API", "Real-time Data", "JavaScript", "HTML", "CSS"]
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
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
    );
};

const Projects = () => {
    const inProgressProjects = [
        {
            title: 'Coinscape',
            description: 'This project is currently in progress and will be updated soon.',
            link: 'https://coinsscape.vercel.app/',
            color: '#FFB668',
            tags: ["React", "Crypto API", "Real-time Data", "JavaScript", "HTML", "CSS"]
        },
        {
            title: 'Colony',
            description: 'This project is currently in progress and will be updated soon.',
            link: 'https://v0-colony-game-concept.vercel.app/',
            color: '#4ECDC4',
            tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
        },
        {
            title: 'Box-Brawler',
            description: 'This project is currently in progress and will be updated soon.',
            link: 'https://v0-three-js-fighting-game.vercel.app/',
            color: '#4ECDC4',
            tags: ["Next.js", "React", "Javascript", "Node.js", "Typescript", "HTML", "CSS"]
        },
        {
            title: 'ChronoHarvester',
            description: 'This project is currently in progress and will be updated soon.',
            link: 'https://v0-three-js-game-concept-gray.vercel.app/',
            color: '#45B7D1',
            tags: ["Next.js", "React", "Javascript", "Node.js", "MongoDB", "NeonDB", "Typescript", "HTML", "CSS"]
        }   
    ];

    return (
        <div className="projects-container">
            <Header />
            <div className="projects-content">
                <h1>All Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                <div className="in-progress-header">Work In Progress</div>

                <div className="projects-grid">
                    {inProgressProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
