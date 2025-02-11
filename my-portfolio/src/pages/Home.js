import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="hero-section">
                <h1>Welcome to My Portfolio</h1>
                <p className="hero-subtitle">Explore my work and skills</p>
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
            </div>
        </div>
    );
};

export default Home;
