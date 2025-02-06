import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/Projects.css';
import '../styles/Skills.css';

const homeSkills = [
  { name: 'DevOps Capstone Certificate' },
  { name: 'IBM Full Stack Software Developer Professional Certificate' },
  { name: 'Git and GitHub' },
  { name: 'Node and Express' },
  { name: 'Linux Commands & Shell Scripting' },
  { name: 'DevOps' },
  { name: 'Agile Development and Scrum' },
  { name: 'Front-end Development with React' },
  { name: 'Software Engineering' },
  { name: 'HTML, CSS, & JavaScript' },
  { name: 'Cloud Computing' },
  { name: 'Python for Data Science and AI' },
  { name: 'Python for AI and Application Development' },
  { name: 'Developing Applications with SQL, Databases, and Django' },
  { name: 'Container & Kubernetes' },
  { name: 'Application Development using Microservices and Serverless' },
  { name: 'Full Stack Application and Software Development' },
  { name: 'Generative AI Essentials for Software Development' },
  { name: 'Test Driven Development' },
  { name: 'Monitoring and Observability for Development' },

];

const projects = [
  {
    title: 'Developer Job Search',
    description: 'Job listings for Houston developers in software, devops, and fullstack.',
    link: 'https://nextjs-boilerplate-virid-eight-41.vercel.app/'
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time weather data.',
    link: 'https://tundra-swart.vercel.app/'
  },
  {
    title: 'Ginx',
    description: 'A modern web portfolio showcasing my professional work and skills.',
    link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/'
  },
  {
    title: 'E Plants',
    description: 'An e-commerce platform for buying and selling plants online.',
    link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/'
  },
  {
    title: 'Crypto Tracker',
    description: 'A cryptocurrency tracker that provides real-time data on crypto prices.',
    link: 'https://tux-chi.vercel.app/'
  },
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Close menu after navigation
  };

  // Update active section based on scroll position
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const sections = ['hero', 'projects', 'skills'];
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementBottom = elementTop + rect.height;
        
        if (scrollTop >= elementTop - window.innerHeight/2 && 
            scrollTop < elementBottom - window.innerHeight/2) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  // Scroll to section when dot is clicked
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      document.querySelector('.main-content').scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="page-wrapper">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <main className="main-content" onScroll={handleScroll}>
        <div className="section-nav">
          <div 
            className={`nav-dot ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => handleNavigation('hero')}
          />
          <div 
            className={`nav-dot ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavigation('projects')}
          />
          <div 
            className={`nav-dot ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavigation('skills')}
          />
        </div>
        <section id="hero" className="fullscreen-section hero-section">
          <Container>
            <Row className="mb-5">
              <Col>
                <h1 className="text-center hero-title">Miguel's Portfolio</h1>
                <p className="text-center hero-subtitle">Projects, Skills, and Certifications</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="projects" className="fullscreen-section projects-section">
          <Container>
            <Row className="mb-4">
              <Col>
                <h2 className="section-title">Featured Projects</h2>
              </Col>
            </Row>
            <Row>
              {projects.map((project, index) => (
                <Card className="project-card" key={index}>
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
              ))}
            </Row>
          </Container>
        </section>

        <section id="skills" className="fullscreen-section skills-section">
          <Container>
            <Row className="mb-4">
              <Col>
                <h2 className="section-title">Skills</h2>
                <div className="skills-container">
                  {homeSkills.map((skill, index) => (
                    <div key={index} className="home-skill-item">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
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
