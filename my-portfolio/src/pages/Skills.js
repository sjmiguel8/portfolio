import React from 'react';
import Header from '../components/Header';
import '../styles/Skills.css';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'HTML & CSS', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
];

const Skills = () => {
    return (
        <div>
            <Header />
            <div className="skills-container">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;