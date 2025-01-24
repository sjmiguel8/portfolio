import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import '../styles/Skills.css';

const skills = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'HTML & CSS' },
    { name: 'Python' },
    { name: 'Git' },
    { name: 'SQL' },
];

const Skills = () => {
    return (
        <div>
            <Header />
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item"
                            style={{ '--index': index }}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
