import React from 'react';
import Header from '../components/Header';
import '../styles/About.css'; // Adjust the path as necessary

const About = () => {
    return (
        <div>
            <Header />
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>I'm a highly motivated and results-driven Full-Stack Developer with a unique Philosophy background and proven problem-solving abilities. My journey in tech has led me to develop self-taught expertise in developing and deploying web applications using modern technologies.</p>
                        <p>I work with cutting-edge tools including React, Next.js, Node.js, AWS, and Docker. As an IBM Certified Full-Stack Software Developer and DevOps practitioner, I bring a comprehensive understanding of the development lifecycle.</p>
                        <p>I'm particularly interested in applying my technical skills to innovative projects within the government sector, where I can contribute to meaningful solutions that serve the public interest.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;