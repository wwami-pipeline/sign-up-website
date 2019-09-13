import React, { Component } from 'react';
import { AppBar, withStyles, Typography, CssBaseline } from '@material-ui/core';
import NavBar from '../../components/NavBar';

const styles = () => ({
  page: {
    overflow: 'hidden',
    paddingBottom: '2em'
  },
  title: {
    fontFamily: 'Lato',
    marginTop: '1em',
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },
  description: {
    fontFamily: 'Lato',
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },
  directionTitleTop: {
    fontFamily: 'Lato',
    marginTop: '2em',
    textAlign: 'center',
    marginBottom: '15px'
  }
});

class AboutPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <NavBar />
        </AppBar>

        <div>
          <Typography className={classes.directionTitleTop} variant="h4">UWSOM Learning Procedures</Typography>
        </div>

        <div>
          <Typography variant="overline" className={classes.title}>
            For all operations questions (students only)
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •For information on things like purchasing supplies, the SLAC
            mini-grant, starting up a new project, etc., please visit our Canvas
            site <a href="https://canvas.uw.edu/courses/1176739">here</a>.
          </Typography>
          <Typography variant="overline" className={classes.title}>
            Teaching Guides
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Toolkit for Preceptors
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Reflection Activities
          </Typography>
          <Typography variant="overline" className={classes.title}>
            Protocols
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Reflection Activities
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Supervision Guide – If you are a preceptor and have questions on
            who you can supervise specific activities, check out this chart!
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Bloodborne Pathogen Protocol – Step-by-step instructions on what to
            do in the case of a needlestick.
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Fingerstick Protocol (SHIFA)
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Health Screening Guidelines (blood pressure, BMI, blood glucose,
            etc.) (SHIFA)
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •SHIFA screen-and–refer clinics and health fairs: information for
            preceptors
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •De-escalation Protocol
          </Typography>
          <Typography variant="overline" className={classes.title}>
            Service Learning Training Videos
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Entering Communities Respectfully
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            •Working with Minors
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
