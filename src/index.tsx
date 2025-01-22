import express from 'express';
// import process from 'process';

// Import necessary modules
import React from 'react';
import '../styles/About.css'; // Adjust the path as necessary

// Create an instance of express
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Define a route handler for the default home page
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello, world!');
});

import ReactDOM from 'react-dom';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>Hello! I'm Miguel Bonilla, a passionate software developer with experience in building web applications using modern technologies. I specialize in JavaScript, React, and Node.js, and I love creating intuitive and dynamic user experiences.</p>
                </div>
            </div>
        </div>
    );
};

// Render the About component
ReactDOM.render(<About />, document.getElementById('root'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});