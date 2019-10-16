import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Link
} from '@material-ui/core';
import NavBar from '../../components/NavBar';

const styles = () => ({
  page: {
    overflow: 'hidden',
    paddingBottom: '2em'
  },
  title: {
    fontFamily: 'Lato',
    fontSize: '1em',
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

class ResourcesPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <NavBar />
        </AppBar>

        <div>
          <Typography className={classes.directionTitleTop} variant="h4">
            Service Learning Resources and Protocols
          </Typography>
        </div>

        <div>
          <Typography variant="overline" className={classes.title}>
            UWSOM SERVICE LEARNING LOGISTICS (FOR MD STUDENTS ONLY)
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            For information on things like purchasing supplies, the SLAC
            mini-grant, starting up a new project, etc., please visit our Canvas
            site{' '}
            <Link
              color="secondary"
              href="https://canvas.uw.edu/courses/1176739"
            >
              here
            </Link>
            .
          </Typography>
          <Typography variant="overline" className={classes.title}>
            TEACHING TOOLS
          </Typography>
          <Typography variant="overline" className={classes.title}></Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Toolkit for Preceptors
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/195OaVgbVZ5DFdejFLJwX1_96FdnM-z-e/view?usp=sharing"
            >
              Reflection Activities
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Interprofessional Supervision Guide – If you are a preceptor and
            have questions on who you can supervise specific activities, check
            out this chart!
          </Typography>
          <Typography variant="overline" className={classes.title}>
            SERVICE LEARNING TRAINING VIDEOS
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link color="secondary" href="">
              Entering Communities Respectfully
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link color="secondary" href="https://youtu.be/-1Uzhd7YLdA">
              Working with Minors
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link color="secondary" href="">
              De-escalation Training
            </Link>
          </Typography>
          <Typography variant="overline" className={classes.title}>
            GENERAL PROTOCOLS
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/19YXIakAij0IOf0yyEiP4ZjNPFJr-CLUc/view?usp=sharing"
            >
              UWSOM Bloodborne Pathogen Protocol – Step-by-step instructions on
              what to do in the case of a needlestick.
            </Link>
          </Typography>
          <Typography variant="overline" className={classes.title}>
            CHAP SPECIFIC PROTOCOLS
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1ArIy-cOJ2d3keqkjyUxP-IBE3Y1D4q3z/view?usp=sharing"
            >
              Chap Footcare Manual
            </Link>
          </Typography>
          <Typography variant="overline" className={classes.title}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1W5g2tey9tPEMCyc5VMb-AsW3ITCqnWSz/view?usp=sharing"
            >
              SHIFA SPECIFIC PROTOCOLS
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1ZTbz-diYHWxnEpEhEu57fLeCykdBD6UW/view?usp=sharing"
            >
              (SHIFA) Blood Glucose Guide
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link color="secondary" href="">
              (SHIFA) Blood Glucose Testing Protocol
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1__J_8Kc7P2Ll0WcVlJoFUECZ7lzDTFAp/view?usp=sharing"
            >
              (SHIFA) Blood Pressure Volunteer Information
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/19mAxA_9UNJ8whBkpRXdHlk26SmM3hnDU/view?usp=sharing"
            >
              (SHIFA) Screen and refer information for preceptors
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link color="secondary" href="">
              (SHIFA) Test result scripts
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResourcesPage);
