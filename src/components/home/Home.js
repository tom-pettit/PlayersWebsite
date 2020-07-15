import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import SearchBarHome from './SearchBarHome'
import Particles from 'react-particles-js';
import './Home.css'



const useStyles = makeStyles((theme) => ({
  root: {
    border: 'none',
    boxShadow: 'none',
    marginRight: 0,
  },

  content: {

    ['@media (max-width: 660px)']: {
        paddingBottom: 0
    },

  },

  cardtitle: {
    ['@media (min-width: 860px)']: {
        fontSize: 80,
        marginBottom: 10
    },
    ['@media (max-width: 860px)']: {
        fontSize: 60,
        marginBottom: 10
    },
    ['@media (max-width: 660px)']: {
        fontSize: 35,
        marginBottom: 10

    },

      fontWeight: 'bold',
      fontFamily: 'Raleway',
  },
  carddescription: {
      fontFamily: 'Raleway',
      ['@media (min-width: 860px)']: {
        fontSize: 15,
      },
      ['@media (max-width: 860px)']: {
        fontSize: 15,
      },
      ['@media (max-width: 660px)']: {
        fontSize: 9,
        marginBottom: 0,
    },
  },
  box: {
    ['@media (min-width: 860px)']: {
        width: '860px',
        marginLeft: '-430px',
    },
    ['@media (max-width: 860px)']: {
        width: '560px',
        marginLeft: '-280px',
    },
    ['@media (max-width: 660px)']: {
        width: '350px',
        marginLeft: '-175px',
    },


    position: 'absolute',
    left: '50%',
    top: '30%',

  },
  icons: {
    ['@media (max-width: 660px)']: {
        fontSize: 'small'
    },
  },
}));


const Home = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
      console.log(e.target.value)
  }

  return (
    <div style={{height: '100%', margin: 0}}>
      <Particles
          id='particles'
          style={{height: 100, margin: 0}}
          params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                },
                "color": {
                  value: "#000000"
                },
                line_linked: {
                  color: {
                    value: '#000000'
                  }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
      }} />
      <div className={classes.box} style={{height: '100%', opacity: '0.85'}}>
          <Card className={classes.root} style={{textAlign: 'center'}}>
              <div style={{display: 'inline-block'}}>
                  <CardContent>
                  <Typography component="h5" variant="h5" className={classes.cardtitle} style={{fontFamily: 'Hind'}}>
                      Concurrent Players
                  </Typography>
                  <Typography className={classes.carddescription} style={{fontFamily: 'Hind'}}>
                      Find the number of concurrent players of any steam game
                  </Typography>
                  <SearchBarHome />
                  </CardContent>
              </div>

          
          </Card>
          
      </div>
      <br></br>
      <div style={{position: 'absolute', top: '40%', left: '50%'}}></div>
      
    </div>
  );
}

export default Home