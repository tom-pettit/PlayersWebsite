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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    border: 'none',
    boxShadow: 'none',
    marginRight: 0,
    flexGrow: 1
  },

  content: {

    ['@media (max-width: 660px)']: {
        paddingBottom: 0
    },

  },

  cardtitle: {
    ['@media (min-width: 860px)']: {
        fontSize: 20,
        marginBottom: 10
    },
    ['@media (max-width: 860px)']: {
        fontSize: 15,
        marginBottom: 10
    },
    ['@media (max-width: 660px)']: {
        fontSize: 10,
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
    top: '100%',

  },
  icons: {
    ['@media (max-width: 660px)']: {
        fontSize: 'small'
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: 20
  },
}));


const Home = (props) => {
  const classes = useStyles();
  const more_info = props.more_info
  const official_name = props.official_name
  var new_price = ''
  if (more_info.price !== '0') {
    new_price = more_info.price.slice(0,-2) + '.' + more_info.price.slice(-2)
  } else {
      new_price = '0'
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{boxShadow: 'none', fontFamily: 'Hind'}}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Official Name:</span> {official_name}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Price:</span> ${new_price}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Owners:</span> {more_info.owners}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Genre:</span> {more_info.genre}</Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Steam Reviews:</span> <span style={{color: 'green'}}>{more_info.positive}</span> vs <span style={{color: 'red'}}>{more_info.negative}</span></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Developer(s):</span> {more_info.developer}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>AppID:</span> {more_info.appid}</Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper} style={{boxShadow: 'none', fontFamily: 'Hind'}}><span style={{fontWeight: 'bold'}}>Publisher:</span> {more_info.publisher}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home