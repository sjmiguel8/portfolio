import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import '../styles/Home.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto',
  },
  media: {
    height: 140,
  },
  home: {
    textAlign: 'center',
    padding: '20px',
  },
  projects: {
    marginTop: '40px',
  },
  projectItem: {
    marginBottom: '20px',
  },
  appBar: {
    backgroundColor: '#333', // Change AppBar background color
  },
  title: {
    color: '#ffcc00', // Change title color
  },
  button: {
    backgroundColor: '#ffcc00', // Change button background color
    color: '#333', // Change button text color
    '&:hover': {
      backgroundColor: '#ff9900', // Change button hover color
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" className={classes.title} sx={{ flexGrow: 1 }}>
            My Professional Portfolio
          </Typography>
          <Button variant="contained" className={classes.button}>
            Click Me
          </Button>
        </Toolbar>
      </AppBar>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
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
      <div className={classes.home}>
        <Typography variant="h3" component="h1">
          Welcome to My Professional Portfolio
        </Typography>
        <Typography variant="body1" component="p">
          Explore my projects and learn more about me!
        </Typography>
        <div className={classes.projects}>
          <Typography variant="h4" component="h2">
            Featured Projects
          </Typography>
          <ul>
            <li className={classes.projectItem}>
              <Typography variant="h5" component="h3">
                Project One
              </Typography>
              <Typography variant="body2" component="p">
                Description of project one.
              </Typography>
            </li>
            <li className={classes.projectItem}>
              <Typography variant="h5" component="h3">
                Project Two
              </Typography>
              <Typography variant="body2" component="p">
                Description of project two.
              </Typography>
            </li>
            <li className={classes.projectItem}>
              <Typography variant="h5" component="h3">
                Project Three
              </Typography>
              <Typography variant="body2" component="p">
                Description of project three.
              </Typography>
            </li>
          </ul>
        </div>
        <div className="about-me">
          <Typography variant="h4" component="h2">
            About Me
          </Typography>
          <Typography variant="body1" component="p">
            Hello, I'm Miguel Bonilla, a dedicated developer with extensive experience in web development. I am passionate about creating highly functional and efficient websites.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
