import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" className="title" style={{ flexGrow: 1 }}>
            My Professional Portfolio
          </Typography>
          <Button variant="contained" className="button">
            Click Me
          </Button>
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
            <li className="projectItem">
              <Typography variant="h5" component="h3">
                Project One
              </Typography>
              <Typography variant="body2" component="p">
                Description of project one.
              </Typography>
            </li>
            <li className="projectItem">
              <Typography variant="h5" component="h3">
                Project Two
              </Typography>
              <Typography variant="body2" component="p">
                Description of project two.
              </Typography>
            </li>
            <li className="projectItem">
              <Typography variant="h5" component="h3">
                Project Three
              </Typography>
              <Typography variant="body2" component="p">
                Description of project three.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
