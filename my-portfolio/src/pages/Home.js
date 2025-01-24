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

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Col md={4} className="mb-4">
                <Card className="project-card">
                  <Card.Img variant="top" src="/static/images/cards/contemplative-reptile.jpg" />
                  <Card.Body>
                    <Card.Title>Project One</Card.Title>
                    <Card.Text>Description of project one.</Card.Text>
                    <Button variant="outline-light" size="sm">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="project-card">
                  <Card.Img variant="top" src="/static/images/cards/contemplative-reptile.jpg" />
                  <Card.Body>
                    <Card.Title>Project Two</Card.Title>
                    <Card.Text>Description of project two.</Card.Text>
                    <Button variant="outline-light" size="sm">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="project-card">
                  <Card.Img variant="top" src="/static/images/cards/contemplative-reptile.jpg" />
                  <Card.Body>
                    <Card.Title>Project Three</Card.Title>
                    <Card.Text>Description of project three.</Card.Text>
                    <Button variant="outline-light" size="sm">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
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
    </div>
  );
};

export default Home;