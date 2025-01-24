import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const homeSkills = [
    { name: 'JavaScript', level: 'Advanced', progress: 90 },
    { name: 'React', level: 'Advanced', progress: 85 },
    { name: 'Node.js', level: 'Intermediate', progress: 75 },
    { name: 'CSS', level: 'Advanced', progress: 90 },
    { name: 'HTML', level: 'Advanced', progress: 90 }
];

const projects = [
  {
    title: 'FlutterTry',
    description: 'AI with a task manager, document analysis, image emotion recognition, simple memory game, and more.',
    fullDescription: 'Detailed description of FlutterTry project with all features and technologies used...',
    link: 'http://fluttertryweb.s3-website.us-east-2.amazonaws.com/'
  },
  {
    title: 'Book Chatter',
    description: 'Different chatbots based off famous book characters...',
    fullDescription: 'Detailed description of Book Chatter project...',
    link: 'http://bookchatter.s3-website.us-east-2.amazonaws.com/'
  },
  {
    title: 'Socrates S',
    description: 'A sophisticated system for managing and tracking educational progress.',
    fullDescription: 'Detailed description of Socrates S project...',
    link: 'http://socratess.s3-website.us-east-2.amazonaws.com/login/'
  }
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <Container className="home-container">
          <section className="hero-section">
            <Row className="mb-5">
              <Col>
                <h1 className="text-center welcome-title">Welcome to My Professional Portfolio</h1>
                <p className="text-center welcome-subtitle">Explore my projects and learn more about me!</p>
              </Col>
            </Row>
          </section>

          <section className="projects-section">
            <Row className="mb-4">
              <Col>
                <h2 className="section-title">Featured Projects</h2>
              </Col>
            </Row>
            <Row>
              {projects.map((project, index) => (
                <Col md={4} className="mb-4" key={index}>
                  <Card className="project-card">
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="button-group">
                        <Button 
                          variant="outline-light" 
                          size="sm" 
                          onClick={() => handleShowDetails(project)}
                        >
                          Learn More
                        </Button>
                        <Button 
                          variant="outline-light" 
                          size="sm"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section className="skills-section">
            <Row className="mb-4">
              <Col>
                <h2 className="section-title">My Skills</h2>
                <div className="skills-container">
                  {homeSkills.map((skill, index) => (
                    <div key={index} className="home-skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                      <div className="progress-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </main>

      <Modal show={showModal} onHide={handleClose} className="project-modal">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject?.fullDescription}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;