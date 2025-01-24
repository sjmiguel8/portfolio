import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this import is correct
import Particles from 'particles.js';

document.addEventListener('DOMContentLoaded', () => {
  Particles.init({
    selector: '.background',
    color: '#ffffff',
    connectParticles: true,
    maxParticles: 100,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
