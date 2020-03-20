import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  CssBaseline,
  Paper,
  Fab,
  Grid
} from '@material-ui/core';
import LinkBox from '../../components/LinkBox';
import MedicalStudentRequirements from '../../components/MedicalStudentRequirements';
import OtherGraduateRequirements from '../../components/OtherGraduateRequirements';
import UndergraduateRequirements from '../../components/UndergraduateRequirements';
import ProviderRequirements from '../../components/ProviderRequirements';
import NavBar from '../../components/NavBar';
import BottomBanner from '../../components/BottomBanner';
import { withRouter, Link } from 'react-router-dom';

const styles = () => {
  return {
    page: {
      overflow: 'hidden'
    },
    directionTitleTop: {
      marginTop: '2em',
      textAlign: 'center',
      marginBottom: '3em',
      maxWidth: 800,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    directionTitleHeader: {
      fontFamily: 'Lato',
      fontSize: '2em',
      textAlign: 'center'
    },
    directionTitleHeaderBold: {
      fontFamily: 'Lato',
      fontSize: '2.4em',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    directionTitleTopText: {
      fontFamily: 'Lato',
      fontSize: '1.2em',
      marginTop: 5,
      textAlign: 'left'
    },
    directionTitleBottom: {
      textAlign: 'center'
    },
    fabButton: {
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: '1.1em',
      width: '320px',
      marginRight: '1em',
      marginTop: '1em'
    },
    fabButtonHolder: {
      textAlign: 'center'
    },
    gridContainer: {
      marginTop: '1.5em',
      marginBottom: '1em',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    linkBoxContainer: {
      mariginLeft: 'auto',
      marginRight: 'auto'
    },
    otherProjectsDiv: {
      backgroundColor: '#F4EFA8',
      height: 473,
      minWidth: 280,
      border: '1px solid red',
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    otherProjectsLink: {
      textDecoration: 'none'
    },
    otherProjectsText: {
      color: '#2E1159',
      marginLeft: '50px',
      marginRight: '50px',
      fontFamily: 'Lato',
      textAlign: 'center'
    },
    paperContainer: {
      backgroundColor: '#513E6D',
      padding: '2em',
      margin: '1.5em',
      maxWidth: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    selectionContainer: {
      maxWidth: 950,
      margin: '15px auto 0 auto',
      textAlign: 'center',
      padding: '2em',
      paddingBottom: '5em'
    }
  };
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerRequirementsOpen: false,
      medicalRequirementsOpen: false,
      otherGradRequirementsOpen: false,
      undergradRequirementsOpen: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <NavBar />

        {/* Modals */}

        <MedicalStudentRequirements
          open={this.state.medicalRequirementsOpen}
          handleClose={() => this.setState({ medicalRequirementsOpen: false })}
        />
        <UndergraduateRequirements
          open={this.state.undergradRequirementsOpen}
          handleClose={() =>
            this.setState({ undergradRequirementsOpen: false })
          }
        />
        <OtherGraduateRequirements
          open={this.state.otherGradRequirementsOpen}
          handleClose={() =>
            this.setState({ otherGradRequirementsOpen: false })
          }
        />
        <ProviderRequirements
          open={this.state.providerRequirementsOpen}
          handleClose={() => this.setState({ providerRequirementsOpen: false })}
        />

        {/* Requirements */}

        <div className={classes.directionTitleTop}>
          <Typography className={classes.directionTitleHeaderBold}>
            SERVE WITH US
          </Typography>
          <Typography className={classes.directionTitleTopText}>
            Volunteering with our programs is a wonderful way to practice your
            clinical and teaching skills, make a difference in our community and
            form meaningful connections. We invite you to explore our
            opportunities for providers and students alike.{' '}
          </Typography>
          <Typography className={classes.directionTitleTopText}>
            We are very flexible and try to make it easy to work around busy
            schedules. There is no required hourly commitment. Simply sign up
            when you have the time!
          </Typography>
        </div>

        <Paper className={classes.paperContainer}>
          <Typography className={classes.directionTitleHeader}>
            Here's What You Need To Know To Get Started
          </Typography>
          <div className={classes.fabButtonHolder}>
            <Fab
              color="secondary"
              style={{ color: '#2E1159' }}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ providerRequirementsOpen: true })}
            >
              Providers
            </Fab>
            <Fab
              color="secondary"
              style={{ color: '#2E1159' }}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ medicalRequirementsOpen: true })}
            >
              Medical Students
            </Fab>
          </div>
          <div className={classes.fabButtonHolder}>
            <Fab
              color="secondary"
              style={{ color: '#2E1159' }}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ otherGradRequirementsOpen: true })}
            >
              Other HS Graduate Students
            </Fab>
            <Fab
              color="secondary"
              style={{ color: '#2E1159' }}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ undergradRequirementsOpen: true })}
            >
              Undergraduates
            </Fab>
          </div>
        </Paper>

        {/* Organizations */}

        <div className={classes.selectionContainer}>
          <div className={classes.directionTitleBottom}>
            <Typography className={classes.directionTitleHeaderBold}>
              FIND AN OPPORTUNITY
            </Typography>
          </div>

          <div className={classes.gridContainer}>
            <Grid container spacing={24}>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/Seattle/SHIFA');
                  }}
                >
                  <LinkBox
                    title="SHIFA"
                    name="STUDENT HEALTH INITIATIVE FOR ACCESS"
                    description={this.props.overviews.SHIFA.description}
                    imageLocation={this.props.images['SHIFA.jpg']}
                    path="/Seattle/SHIFA"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/Seattle/CHAP');
                  }}
                >
                  <LinkBox
                    title="CHAP"
                    name="COMMUNITY HEALTH ADVANCEMENT PROGRAM"
                    description={this.props.overviews.CHAP.description}
                    imageLocation={this.props.images['CHAP.jpg']}
                    path="/Seattle/CHAP"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/Seattle/UDSM');
                  }}
                >
                  <LinkBox
                    title="UDSM"
                    name="UNIVERSITY DISTRICT STREET MEDICINE"
                    description={this.props.overviews.UDSM.description}
                    imageLocation={this.props.images['UDSM.jpg']}
                    path="/Seattle/UDSM"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/Seattle/DFAD');
                  }}
                >
                  <LinkBox
                    title="Doc for a Day"
                    name="DFAD"
                    description={this.props.overviews.DFAD.description}
                    imageLocation={this.props.images['DFAD.jpg']}
                    path="/Seattle/DFAD"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/Seattle/UMOV');
                  }}
                >
                  <LinkBox
                    title="Mobile Health Outreach Van"
                    name=""
                    description={this.props.overviews.UMOV.description}
                    imageLocation={this.props.images['UMOV.jpg']}
                    path="/Seattle/UMOV"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/Seattle/UTEST');
                  }}
                >
                  <LinkBox
                    title="UTest"
                    name="Rapid HIV Testing"
                    description={this.props.overviews.UTEST.description}
                    imageLocation={this.props.images['UTEST.jpg']}
                    path="/Seattle/UTEST"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <Link
                  to={{ pathname: '/Seattle/Others' }}
                  className={classes.otherProjectsLink}
                >
                  <div
                    className={classes.otherProjectsDiv}
                    onClick={() => {
                      this.props.history.push('/Seattle/Others');
                    }}
                  >
                    <Typography
                      variant="h4"
                      className={classes.otherProjectsText}
                    >
                      All other UWSOM Service Learning Projects
                    </Typography>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(HomePage));
