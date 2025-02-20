import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import ProjectCard from '../components/project-card';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="hero-section">
                <h1>Welcome to My Portfolio</h1>
                <p className="hero-subtitle">To view all my deployed projects, click on the projects button below.</p>
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
                        <h2>Featured Projects</h2>
                        <div className="projects-grid">
                            <ProjectCard
                                title="ChittChat (Debate Platform)"
                                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                                image="/placeholder.svg"
                                link="https://github.com"
                                tags={["Next.js", "Prisma", "Stripe"]}
                            />
                            <ProjectCard
                                title="Task Management App"
                                description="A real-time task management application with team collaboration features."
                                image="/placeholder.svg"
                                link="https://github.com"
                                tags={["React", "Node.js", "Socket.io"]}
                            />
                            <ProjectCard
                                title="AI Chat Interface"
                                description="An AI-powered chat interface with natural language processing capabilities."
                                image="/placeholder.svg"
                                link="https://github.com"
                                tags={["OpenAI", "Next.js", "TailwindCSS"]}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
