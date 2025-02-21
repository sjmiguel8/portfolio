import React from 'react';
import Header from '../components/Header';
import '../styles/Skills.css';

const badges = [
    { name: 'DevOps Capstone Certificate' },
    { name: 'IBM Full Stack Software Developer Professional Certificate' },
    { name: 'Git and GitHub' },
    { name: 'Node and Express' },
    { name: 'Linux Commands & Shell Scripting' },
    { name: 'DevOps' },
    { name: 'Agile Development and Scrum' },
    { name: 'Front-end Development with React' },
    { name: 'Software Engineering' },
    { name: 'HTML, CSS, & JavaScript' },
    { name: 'Cloud Computing' },
    { name: 'Python for Data Science and AI' },
    { name: 'Python for AI and Application Development' },
    { name: 'Developing Applications with SQL, Databases, and Django' },
    { name: 'Container & Kubernetes' },
    { name: 'Application Development using Microservices and Serverless' },
    { name: 'Full Stack Application and Software Development' },
    { name: 'Generative AI Essentials for Software Development' },
    { name: 'Test Driven Development' },
    { name: 'Monitoring and Observability for Development' },

];

const Skills = () => {
    return (
        <div>
            <Header />
            <div className="skills-container">
                <h2>Certifications & Skills</h2>
<ul className="skills-list">
    {badges.map((badge, index) => (
        <li key={index} className="skill-item">
            {badge.name}
        </li>
    ))}
</ul>
            </div>
        </div>
    );
};

export default Skills;
