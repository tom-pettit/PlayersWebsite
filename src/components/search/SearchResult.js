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
    

    console.log('ELSE', game)
    if (game) {
        console.log('GAAME', game)
        return(
            <div>
                <div className={classes.box}>
                    <Card className={classes.root} style={{textAlign: 'center'}}>
                        <div style={{display: 'inline-block'}}>
                            <CardContent>
                            <Typography component="h5" variant="h5" className={classes.cardtitle} style={{fontFamily: 'Hind'}}>
                                {game}
                            </Typography>
                            <Typography className={classes.carddescription} style={{fontFamily: 'Hind'}}>
                                Here are the details for: {game}
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