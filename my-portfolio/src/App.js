import React from 'react';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a showcase of my work and projects.</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {/* Additional sections can be added here */}
      </main>
    </div>
  );
}

export default App;