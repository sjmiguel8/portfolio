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
                        <p>Hello! I'm Miguel Bonilla, a passionate software developer with experience in building web applications using modern technologies. I specialize in JavaScript, React, and Node.js, and I love creating intuitive and dynamic user experiences.</p>
                        <p>With a strong background in computer science and a keen eye for design, I strive to deliver high-quality code and innovative solutions. I am always eager to learn new skills and take on challenging projects.</p>
                        <p>When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying outdoor activities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;