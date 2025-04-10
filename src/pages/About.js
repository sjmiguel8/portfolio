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
                        <h2>Summary</h2>
                        <p>Philosophy graduate with over 1 year of experience designing, developing, and deploying full-stack software solutions.
Proficient in JavaScript, Python, React, Node.js, and AWS, with hands-on experience in Agile methodologies and DevOps
practices. Certified in Full-Stack Software Development and DevOps by IBM, with a proven track record of building
production-ready web applications using modern frameworks and tools like Docker and Terraform. Passionate about solving
complex problems and delivering end-to-end solutions in collaborative, cross-functional teams.</p>
                    
                <h2>Education</h2>
                                    <p><strong>University of Houston | Houston, TX</strong><br />
                                        Philosophy | 05/2024<br />
                                        Bachelor of Arts in Philosophy</p>
                                    <p><strong>Strake Jesuit College Prep | Houston, TX</strong><br />
                                        High School Diploma | 05/2017</p>
                                    
                                    <h2>Certificates</h2>
                                    <p>IBM Full-Stack Software Developer Certificate, IBM DevOps and Software Engineering Certificate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;