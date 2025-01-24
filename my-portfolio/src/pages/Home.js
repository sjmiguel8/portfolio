import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import '../styles/Home.css';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" className="title" sx={{ flexGrow: 1 }}>
            My Professional Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className="root">
        <CardMedia
          className="media"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Random Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Professional Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card component showcases an image and some text in a professional manner.
          </Typography>
        </CardContent>
      </Card>
      <div className="home">
        <Typography variant="h3" component="h1">
          Welcome to My Professional Portfolio
        </Typography>
        <Typography variant="body1" component="p">
          Explore my projects and learn more about me!
        </Typography>
        <div className="projects">
          <Typography variant="h4" component="h2">
            Featured Projects
          </Typography>
          <ul>
            <li className="projectItem" onClick={() => alert('Project One')}>
              <Typography variant="h5" component="h3">
                Project One
              </Typography>
              <Typography variant="body2" component="p">
                Description of project one.
              </Typography>
            </li>
            <li className="projectItem" onClick={() => alert('Project Two')}>
              <Typography variant="h5" component="h3">
                Project Two
              </Typography>
              <Typography variant="body2" component="p">
                Description of project two.
              </Typography>
            </li>
            <li className="projectItem" onClick={() => alert('Project Three')}>
              <Typography variant="h5" component="h3">
                Project Three
              </Typography>
              <Typography variant="body2" component="p">
                Description of project three.
              </Typography>
            </li>
          </ul>
        </div>
        <div className="skills">
          <Typography variant="h4" component="h2">
            My Skills
          </Typography>
          <ul className="skills-list">
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">HTML</li>
          </ul>
        </div>
        <Button variant="contained" className="button" onClick={handleOpen}>
          Open Modal
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-content">
          <Typography variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography variant="body1" component="p">
            This is some content for the modal. You can add more details here.
          </Typography>
          <Button variant="contained" className="button" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
