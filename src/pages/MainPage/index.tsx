import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  CssBaseline
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import HomeMap from '../../components/HomeMap';
import NavBar from '../../components/NavBar';

import '../../App.css';

const styles = () => {
  return {
    page: {
      overflow: 'hidden'
    },
    title: {
      fontFamily: 'Lato',
      fontSize: '2.4em',
      fontWeight: 'bold',
      marginTop: '24px',
      textAlign: 'center'
    },
    subtitle: {
      fontFamily: 'Lato',
      fontSize: '2em',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  };
};

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <CssBaseline />
        <NavBar />
        <div style={{textAlign: "center"}}>
          <Typography className={classes.title}>
            UWSOM SERVICE LEARNING
          </Typography>
          <Typography className={classes.subtitle}>
            SELECT A LOCATION
          </Typography>
          <HomeMap />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(HomePage));
