import React from 'react';
import Header from '../components/Header';
import '../styles/Projects.css';

const projects = [
      {
        title: 'Debate.com',
        description: 'A fully functional debate platform that allows users to create posts, login, post status updates.',
        link: 'https://chit-chat-alpha-six.vercel.app/'
      },
      {
        title: 'Data Driven Analytics Bot',
        description: 'Upload a .csv or .json file, have it parsed, and select from a list of analytic choices.',
        link: 'https://v0-ssda.vercel.app/'
      },
      {
        title: 'Developer Job Search',
        description: 'Real time job search for developers. Three different cateogories to choose from.',
        link: 'https://devjobsearch.vercel.app/'
      },
      {
        title: 'ISS Tracker',
        description: 'A real-time tracker for the International Space Station, and real time space news.',
        link: 'https://trix-smoky.vercel.app/'
      },
      {
        title: 'Weather App',
        description: 'A simple weather application that provides real-time weather data.',
        link: 'https://tundra-swart.vercel.app/'
      },
      {
        title: 'Ginx',
        description: 'A car dealership website, with the backend displaying dealerships.',
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
