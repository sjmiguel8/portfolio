import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import '../styles/Projects.css';
import '../styles/Skills.css';

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
    description: 'AI with a task manager, document analysis, image emotion recognition, and more...',
    fullDescription: 'FlutterTry is an innovative AI-powered application that integrates a variety of features to enhance productivity and user experience. It includes a task manager to help you organize and prioritize your tasks efficiently. The document analysis feature allows you to extract and analyze information from various documents quickly. Additionally, the image emotion recognition tool can detect and interpret emotions from images, providing valuable insights. The application also includes a simple memory game to help improve cognitive skills. Overall, FlutterTry is designed to be a versatile tool for both personal and professional use.',
    link: 'http://fluttertryweb.s3-website.us-east-2.amazonaws.com/'
  },
  {
    title: 'Book Chatter',
    description: 'Chat with different chatbots based on famous book characters...',
    fullDescription: 'Book Chatter is an engaging platform that allows users to interact with chatbots modeled after famous book characters. Whether you want to have a conversation with Sherlock Holmes, Elizabeth Bennet, or other beloved characters, Book Chatter provides a unique and entertaining experience. The platform also features a dream and psychoanalysis bot, offering users the opportunity to explore their subconscious thoughts and dreams. Book Chatter aims to bring literature to life by combining the charm of classic characters with modern AI technology.',
    link: 'http://bookchatter.s3-website.us-east-2.amazonaws.com/'
  },
  {
    title: 'Socrates S',
    description: 'A sophisticated system for managing and tracking educational progress...',
    fullDescription: 'Socrates S is a comprehensive educational management system designed to support educators and students in tracking and enhancing learning outcomes. The platform offers detailed progress reports, personalized learning plans, and a wide range of interactive educational resources. With advanced analytics, Socrates S provides insights into student performance, helping educators identify areas for improvement and tailor their teaching strategies accordingly. The user-friendly interface ensures that both teachers and students can navigate the system with ease, making it an invaluable tool for modern education.',
    link: 'http://socratess.s3-website.us-east-2.amazonaws.com/login/'
  },
  {
    title: 'Ginx',
    description: 'A modern web portfolio showcasing my professional work and skills.',
    link: 'https://main.d1wv2h88ci88t8.amplifyapp.com/'
  },
  {
    title: 'e-plant-shopping',
    description: 'An e-commerce platform for buying and selling plants online.',
    link: 'https://main.d1eqxt1nr5en92.amplifyapp.com/'
  },
  {
    title: 'slime',
    description: 'An interactive web game featuring slime physics and animations.',
    link: 'https://main.d2409w8ghk72v2.amplifyapp.com/'
  },
  {
    title: 'ChooseWisely',
    description: 'A decision-making application helping users make informed choices.',
    link: 'https://main.d2n5cghagdyuz8.amplifyapp.com/'
  },
  {
    title: 'fullstack',
    description: 'A comprehensive full-stack web application demonstration.',
    link: 'https://main.d292ubbvg4ueuu.amplifyapp.com/'
  },
  {
    title: 'OrganizeBot',
    description: 'An AI-powered organization and productivity tool.',
    link: 'http://fluttertryweb.s3-website.us-east-2.amazonaws.com/'
  },
  {
    title: 'CrimeMapper',
    description: 'A visualization tool for mapping and analyzing crime data.',
    link: 'http://crimemapper.s3-website.us-east-2.amazonaws.com/'
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
                <h1 className="text-center welcome-title">Welcome to my Portfolio</h1>
                <p className="text-center welcome-subtitle">Explore my projects and learn more about me!</p>
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
                <h2 className="section-title">Familiar Languages</h2>
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
