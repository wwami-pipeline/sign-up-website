import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Link,
} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import BottomBanner from '../../components/BottomBanner';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = () => ({
  page: {
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '1.2em',
    marginTop: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 750,
  },
  description: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '1.1em',
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  directionTitleTop: {
    fontFamily: 'Lato',
    margin: '30px 0 15px 0',
    textAlign: 'center',
    textDecoration: 'underline',
  },
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

        {/* SERVICE LEARNING WEBSITE LINKS */}
        <div>
          <Typography className={classes.directionTitleTop} variant="h5">
            SERVICE LEARNING WEBSITE LINKS
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
              target="_blank"
            >
              here
            </Link>
            .
          </Typography>

          <Typography variant="overline" className={classes.title}>
            Official UWSOM Service Learning Site
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://www.uwmedicine.org/school-of-medicine/md-program/service-learning"
              target="_blank"
            >
              https://www.uwmedicine.org/school-of-medicine/md-program/service-learning
            </Link>
          </Typography>

          <Typography variant="overline" className={classes.title}>
            UWSOM Intranet Site - Service Learning
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://education.uwmedicine.org/volunteer-opportunities-2-2/"
              target="_blank"
            >
              https://education.uwmedicine.org/volunteer-opportunities-2-2/
            </Link>
          </Typography>

          <Typography variant="overline" className={classes.title}>
            CHSIE Interprofessional Community Engagement
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://collaborate.uw.edu/in-the-community/"
              target="_blank"
            >
              https://collaborate.uw.edu/in-the-community/
            </Link>
          </Typography>

          {/* TRAINING MATERIALS  */}

          <div>
            <Typography className={classes.directionTitleTop} variant="h5">
              SERVICE LEARNING TRAINING VIDEOS
            </Typography>
          </div>

          <Typography variant="overline" className={classes.title}>
            Entering Communities Respectfully
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="http://servicelearning.washington.edu/resources"
              target="_blank"
            >
              http://servicelearning.washington.edu/resources
            </Link>
          </Typography>

          <Typography variant="overline" className={classes.title}>
            Working with Minors
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://youtu.be/-1Uzhd7YLdA"
              target="_blank"
            >
              https://youtu.be/-1Uzhd7YLdA
            </Link>
          </Typography>

          <Typography variant="overline" className={classes.title}>
            De-escalation Training
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="http://servicelearning.washington.edu/resources"
              target="_blank"
            >
              http://servicelearning.washington.edu/resources
            </Link>
          </Typography>

          {/* TEACHING TOOLS */}

          <div>
            <Typography className={classes.directionTitleTop} variant="h5">
              TEACHING TOOLS
            </Typography>
          </div>

          <Typography variant="subtitle1" className={classes.title}>
            TOOLKIT FOR PRECEPTORS
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/195OaVgbVZ5DFdejFLJwX1_96FdnM-z-e/view?usp=sharing"
              target="_blank"
            >
              Reflection Activities
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.title}>
            Interprofessional Supervision Guide – If you are a preceptor and
            have questions on who you can supervise specific activities, check
            out this chart!
          </Typography>

          {/* PROTOCOLS */}
          <div>
            <Typography className={classes.directionTitleTop} variant="h5">
              PROTOCOLS
            </Typography>
          </div>

          <Typography variant="overline" className={classes.title}>
            GENERAL PROTOCOLS
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/19YXIakAij0IOf0yyEiP4ZjNPFJr-CLUc/view?usp=sharing"
              target="_blank"
            >
              UWSOM Bloodborne Pathogen Protocol – Step-by-step instructions on
              what to do in the case of a needlestick.
            </Link>
          </Typography>

          <Typography variant="overline" className={classes.title}>
            <u>SEATTLE</u>
          </Typography>

          <Typography variant="overline" className={classes.title}>
            CHAP SPECIFIC PROTOCOLS
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1ArIy-cOJ2d3keqkjyUxP-IBE3Y1D4q3z/view?usp=sharing"
              target="_blank"
            >
              Chap Footcare Manual
            </Link>
          </Typography>
          <Typography variant="overline" className={classes.title}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1W5g2tey9tPEMCyc5VMb-AsW3ITCqnWSz/view?usp=sharing"
              target="_blank"
            >
              SHIFA SPECIFIC PROTOCOLS
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/1ZTbz-diYHWxnEpEhEu57fLeCykdBD6UW/view?usp=sharing"
              target="_blank"
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
              target="_blank"
            >
              (SHIFA) Blood Pressure Volunteer Information
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link
              color="secondary"
              href="https://drive.google.com/file/d/19mAxA_9UNJ8whBkpRXdHlk26SmM3hnDU/view?usp=sharing"
              target="_blank"
            >
              (SHIFA) Screen and refer information for preceptors
            </Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            <Link color="secondary" href="">
              (SHIFA) Test result scripts
            </Link>
          </Typography>

          {/* PROTOCOLS */}
          <div>
            <Typography className={classes.directionTitleTop} variant="h5">
              OTHER OPPORTUNITIES
            </Typography>
          </div>

          <Typography className={classes.title}>
            Service Learning is just one way to participate in activities
            outside of the classroom. Please check out these other opportunities
            for School of Medicine students to get involved.
          </Typography>

          <Typography className={classes.description}>
            <i>
              *Although many of these organizations involve service, Service
              Learning at the SOM has a more limited definition as providing
              service to our external, rather than internal communities.
            </i>
          </Typography>

          <div
            style={{
              marginTop: '1em',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 750,
            }}
          >
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  SEATTLE ORGANIZATIONS
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>WORK IN PROGRESS...</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  SPOKANE ORGANIZATIONS
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>WORK IN PROGRESS...</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  WYOMING ORGANIZATIONS
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>WORK IN PROGRESS...</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  IDAHO ORGANIZATIONS
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>WORK IN PROGRESS...</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default withStyles(styles)(ResourcesPage);
