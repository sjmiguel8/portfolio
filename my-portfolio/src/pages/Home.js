import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <Container className="home-container">
        <Row className="mb-4">
          <Col>
            <h1 className="text-center text-white welcome-title">Welcome to My Professional Portfolio</h1>
            <p className="text-center text-white welcome-subtitle">Explore my projects and learn more about me!</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2 id="projects" className="text-white section-title">Featured Projects</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="project-card" onClick={() => alert('Project One')}>
              <Card.Img variant="top" src="/static/images/cards/contemplative-reptile.jpg" />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>Description of project one.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card" onClick={() => alert('Project Two')}>
              <Card.Img variant="top" src="/static/images/cards/contemplative-reptile.jpg" />
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text>Description of project two.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card" onClick={() => alert('Project Three')}>
              <Card.Img variant="top" src="/static/images/cards/contemplative-reptile.jpg" />
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>Description of project three.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2 id="skills" className="text-white section-title">My Skills</h2>
            <ul className="list-inline skills-list">
              <li className="list-inline-item badge bg-light text-dark m-1">JavaScript</li>
              <li className="list-inline-item badge bg-light text-dark m-1">React</li>
              <li className="list-inline-item badge bg-light text-dark m-1">Node.js</li>
              <li className="list-inline-item badge bg-light text-dark m-1">CSS</li>
              <li className="list-inline-item badge bg-light text-dark m-1">HTML</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <Button variant="light" className="text-dark open-modal-button" onClick={handleOpen}>
              Open Modal
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is some content for the modal. You can add more details here.</Modal.Body>
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