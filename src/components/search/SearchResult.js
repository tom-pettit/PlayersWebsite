import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { compose } from 'redux'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import axios from 'axios'
import GameInfo from './GameInfo'
import Particles from 'react-particles-js';
import './SearchResult.css'
import Navbar from '../navbars/Navbar'



const useStyles = makeStyles((theme) => ({
    root: {
      border: 'none',
      boxShadow: 'none',
      marginRight: 0
    },
  
    content: {
  
      ['@media (max-width: 660px)']: {
          paddingBottom: 0
      },
  
    },
  
    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 50,
          marginBottom: 10
      },
      ['@media (max-width: 860px)']: {
          fontSize: 30,
          marginBottom: 10
      },
      ['@media (max-width: 660px)']: {
          fontSize: 20,
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
      top: '10%',
  
    },
    icons: {
      ['@media (max-width: 660px)']: {
          fontSize: 'small'
      },
    },
  }));

const SearchResult = (props) => {
    const classes = useStyles()
    var game = props.match.params.name
    

    if (game) {
        return(
            <div style={{height: '100%', margin: 0}}>
                <Navbar style={{opacity: '0'}}/>
                <Particles
                    id='particles'
                    style={{opacity: '0.85', height: '100%', margin: 0}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 60
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
                <div className={classes.box} style={{opacity:'0.85'}}>
                    <Card className={classes.root} style={{textAlign: 'center'}}>
                        <div style={{display: 'inline-block'}}>
                            <CardContent>
                            <Typography component="h5" variant="h5" className={classes.cardtitle} style={{fontFamily: 'Hind'}}>
                                {game}
                            </Typography>
                            </CardContent>
                        </div>
                        <GameInfo game={game}/>
                    </Card>
                    
                </div>
                <br></br>
                <div style={{position: 'absolute', top: '40%', left: '50%'}}></div>
            </div>
    )} else {
        return (
            <div className="row container" className={classes.game} style={{fontFamily: 'Raleway'}}>
                <p>Loading game...</p>
            </div>
        )
    }
    
}

export default SearchResult