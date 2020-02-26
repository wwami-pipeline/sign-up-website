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
import { withRouter, Link } from 'react-router-dom';
import EventCalendar from '../../components/EventCalendar';

import '../../App.css';

const styles = () => {
  return {
    page: {
      overflow: 'hidden'
    },
    calendarContainer: {
      backgroundColor: 'white',
      color: 'black',
      margin: '15px auto 0px auto',
      maxWidth: '900px',
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
      textAlign: 'center',
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
      paddingBottom: '5em',
    }
  };
};

class HomePage extends Component {
  state = {
    providerRequirementsOpen: false,
    medicalRequirementsOpen: false,
    otherGradRequirementsOpen: false,
    undergradRequirementsOpen: false
  };

  calendarEventClick(info) {
    console.log(info.event.title + ": " + info.event.extendedProps.description);
  }

  onMapClick(region) {
    console.log(region);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <NavBar />

        <svg width="955" height="436" viewBox="0 0 955 436" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={this.onMapClick("wwami")}>
          <g transform="translate(0.000000,436.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none" >
            <path onClick={this.onMapClick("alaska")} style={{pointerEvents: 'bounding-box'}}
             d="M1301 4148 c-38 -24 -136 -49 -157 -41 -10 3 -14 -2 -14 -19 0 -33
            -23 -63 -44 -55 -9 4 -16 15 -16 26 0 18 -3 19 -27 10 -14 -5 -45 -7 -67 -4
            -40 6 -42 5 -70 -41 -17 -26 -46 -64 -65 -84 -31 -33 -45 -39 -109 -50 -41 -7
            -87 -10 -103 -6 -18 3 -29 1 -29 -5 0 -6 -13 -27 -30 -46 -16 -18 -30 -41 -30
            -50 0 -9 27 -41 60 -71 66 -61 86 -106 75 -172 l-6 -38 51 -11 c28 -6 56 -9
            60 -6 18 11 50 -34 50 -69 0 -30 3 -35 28 -38 38 -4 44 -45 8 -54 -15 -3 -26
            -14 -28 -27 -2 -18 -9 -21 -31 -19 -15 2 -34 -2 -42 -8 -10 -8 -22 -7 -50 5
            -21 8 -46 15 -56 15 -35 0 -52 30 -46 83 l6 49 -61 -7 c-43 -5 -67 -13 -77
            -27 -15 -18 -18 -18 -45 -4 -27 14 -31 13 -62 -10 -17 -14 -48 -28 -68 -31
            -20 -3 -36 -10 -36 -14 0 -5 4 -9 8 -9 5 0 31 -19 60 -42 28 -24 61 -51 74
            -60 23 -17 23 -18 4 -33 -29 -22 -55 -18 -66 10 -5 14 -14 25 -19 25 -6 0 -3
            -13 7 -29 16 -28 15 -31 -2 -50 -23 -25 -16 -36 42 -65 37 -18 52 -21 69 -13
            17 7 29 5 50 -9 15 -10 40 -17 56 -16 17 2 29 -3 32 -13 17 -53 15 -52 38 -23
            13 16 44 34 74 44 49 16 54 16 78 0 35 -23 30 -56 -12 -76 -24 -11 -31 -20
            -27 -35 2 -11 5 -44 6 -74 3 -47 0 -56 -22 -72 -16 -12 -46 -21 -80 -23 -30
            -2 -77 -13 -103 -25 -50 -23 -84 -24 -79 -2 5 21 -19 41 -48 41 -20 0 -34 -10
            -54 -38 -14 -21 -26 -43 -26 -50 0 -6 -18 -23 -39 -38 -22 -14 -47 -41 -55
            -59 -10 -21 -25 -35 -39 -37 -20 -3 -22 -7 -19 -63 2 -46 8 -64 24 -76 16 -12
            19 -22 14 -47 -4 -17 -14 -36 -21 -42 -11 -9 -12 -17 -5 -30 6 -10 10 -27 10
            -38 0 -10 11 -29 25 -42 15 -14 25 -35 25 -51 0 -20 6 -28 24 -33 44 -11 87 5
            105 37 22 42 50 69 62 61 6 -3 8 -15 3 -28 -4 -11 -11 -66 -15 -121 -12 -137
            -13 -148 -22 -162 -4 -6 -4 -18 -1 -27 3 -9 1 -23 -6 -31 -20 -24 35 -19 69 6
            40 29 93 30 106 2 7 -16 20 -23 45 -25 33 -3 35 -5 41 -48 3 -25 7 -35 7 -23
            2 26 48 83 68 83 14 0 18 -12 15 -39 -5 -32 7 -41 35 -26 15 8 32 11 37 8 5
            -3 23 3 42 12 20 11 40 15 51 11 17 -7 11 -15 -40 -62 -56 -53 -57 -56 -41
            -74 17 -19 17 -20 -9 -29 -15 -6 -26 -18 -26 -29 0 -9 -6 -27 -14 -38 -8 -11
            -16 -31 -18 -44 -2 -17 -11 -26 -29 -30 -43 -8 -79 -44 -79 -78 0 -33 -15 -44
            -43 -30 -25 13 -73 1 -135 -34 -55 -31 -72 -51 -69 -83 2 -16 -4 -20 -33 -20
            -27 0 -35 4 -34 17 2 21 -43 33 -86 23 -16 -4 -55 -27 -87 -51 -31 -24 -63
            -42 -71 -39 -8 3 -12 0 -9 -7 2 -7 11 -13 19 -13 8 0 22 -6 30 -12 11 -10 16
            -8 25 6 6 10 24 21 40 24 19 4 34 15 41 32 15 32 38 28 34 -6 -2 -24 0 -24 55
            -21 32 1 64 9 73 17 19 17 56 20 65 4 5 -7 11 -5 18 5 7 8 26 18 44 21 55 9
            73 20 91 55 13 28 25 36 54 41 20 3 44 11 52 18 8 7 21 11 28 8 7 -2 20 1 28
            8 8 7 28 17 45 22 21 7 31 18 37 42 8 28 20 37 91 72 130 64 140 70 183 109
            23 21 50 41 61 44 28 9 35 50 11 65 -10 6 -24 11 -32 11 -7 0 -20 7 -27 16
            -11 14 -6 23 41 65 81 73 89 79 104 79 19 0 40 26 26 35 -18 11 -12 45 9 45
            11 0 21 6 23 14 4 19 137 137 182 161 33 18 39 19 64 5 30 -17 40 -52 20 -69
            -60 -49 -79 -61 -101 -61 -22 0 -25 -4 -24 -33 1 -25 -9 -46 -36 -79 -20 -25
            -37 -48 -37 -51 0 -3 18 -3 40 0 32 5 40 2 40 -10 0 -17 -45 -57 -65 -57 -7 0
            -17 -6 -23 -12 -8 -10 1 -13 39 -15 41 -1 55 3 74 23 13 13 31 24 40 24 22 0
            65 30 65 45 0 25 26 36 54 24 20 -10 29 -10 38 -1 7 7 24 12 38 12 19 0 30 8
            38 25 9 20 9 23 -3 18 -26 -10 -47 5 -36 25 7 14 5 21 -10 30 -28 18 -23 77 6
            78 11 1 28 5 39 9 11 5 26 3 37 -3 24 -15 52 -15 67 0 13 13 38 -3 47 -32 3
            -11 15 -22 25 -25 10 -3 22 -15 25 -26 4 -10 14 -19 24 -19 10 0 24 -7 31 -15
            11 -14 14 -13 24 6 16 33 33 34 50 1 8 -15 33 -41 55 -55 38 -25 48 -27 154
            -27 108 0 114 -1 135 -25 31 -36 95 -35 118 1 24 36 59 30 58 -11 -1 -16 -5
            -40 -9 -52 -6 -18 -1 -25 32 -41 21 -11 57 -25 80 -31 27 -7 50 -22 63 -41 12
            -17 27 -30 34 -30 7 0 44 -25 83 -54 59 -47 73 -64 91 -111 13 -33 35 -67 54
            -83 39 -33 104 -133 113 -172 7 -33 25 -41 25 -11 0 36 -44 136 -68 157 -19
            16 -23 26 -17 40 4 10 7 24 6 29 -2 6 -4 24 -6 40 -2 17 -3 35 -4 41 -1 6 -22
            14 -48 18 -67 9 -98 27 -99 56 -1 14 -8 40 -15 57 -27 66 26 66 83 -1 l27 -31
            1 38 c0 29 4 37 18 37 23 0 102 -104 102 -134 0 -11 4 -28 10 -36 8 -13 10
            -12 15 1 3 9 5 20 4 25 -8 44 22 45 65 2 22 -22 35 -47 39 -74 4 -23 17 -53
            29 -69 18 -23 19 -30 9 -47 -18 -29 12 -60 53 -56 28 3 31 0 37 -36 7 -43 25
            -59 51 -45 27 14 35 -16 14 -52 l-17 -29 31 7 c26 5 32 2 37 -16 4 -16 11 -19
            29 -15 19 5 28 -2 51 -35 15 -22 33 -40 39 -41 31 -1 31 82 1 170 l-23 65 -75
            25 c-41 14 -89 35 -106 48 -37 26 -90 97 -126 167 -27 54 -61 89 -148 154 -31
            23 -78 68 -103 101 -26 33 -55 64 -65 70 -22 11 -34 -1 -75 -72 -30 -53 -51
            -68 -94 -68 -31 0 -60 27 -79 71 -6 15 -31 40 -55 56 -24 16 -54 46 -67 66
            -22 34 -28 37 -55 31 -78 -17 -142 -1 -151 39 -3 12 -28 391 -55 842 -27 451
            -52 847 -56 880 -6 59 -6 60 -65 103 -58 43 -61 44 -117 37 -43 -5 -75 -1
            -132 14 -41 12 -94 21 -118 21 -37 0 -48 5 -76 35 -30 31 -39 35 -85 35 -28 0
            -60 -5 -71 -12 -15 -10 -22 -9 -38 5 -10 9 -24 17 -30 17 -7 0 -20 17 -30 38
            -17 36 -19 37 -64 34 -37 -2 -48 1 -52 15 -4 10 -13 27 -21 37 -15 19 -15 19
            -40 -4 -21 -20 -28 -22 -50 -12 -31 14 -32 38 -2 48 21 7 21 7 2 15 -29 11
            -36 10 -74 -13z"/>
            <path d="M1278 1613 c-21 -14 -38 -34 -38 -44 0 -10 -4 -20 -10 -24 -5 -3 -7
            -12 -4 -19 8 -22 -15 -30 -35 -12 -16 14 -17 13 -13 -19 6 -48 -4 -71 -23 -55
            -7 6 -15 21 -17 32 -3 19 -4 19 -30 -4 -24 -20 -26 -28 -21 -65 6 -49 18 -55
            35 -18 11 24 38 35 38 15 0 -5 7 -7 15 -4 8 4 22 1 29 -5 11 -9 17 -8 29 9 8
            11 35 37 60 56 46 36 54 61 15 49 -23 -8 -58 20 -58 44 1 20 64 61 93 61 20 0
            20 0 1 15 -24 18 -22 19 -66 -12z"/>
            </g>
        </svg>


        <div className={classes.calendarContainer}>
          <EventCalendar 
            eventClickFn={e => this.calendarEventClick(e)}
            events={[
              {title: 'event 1', date: '2020-02-26', description: 'test' },
              {title: 'event 2', date: '2020-02-26', description: 'test1' },
              {title: 'event 3', date: '2020-02-26' },
              {title: 'event 4', date: '2020-02-26' },
              {title: 'event 5', date: '2020-02-26' }
            ]}
          />
        </div>

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
                    this.props.history.push('/SHIFA');
                  }}
                >
                  <LinkBox
                    title="SHIFA"
                    name="STUDENT HEALTH INITIATIVE FOR ACCESS"
                    description={this.props.overviews.SHIFA.description}
                    imageLocation="images/SHIFA/SHIFA.jpg"
                    path="/SHIFA"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/CHAP');
                  }}
                >
                  <LinkBox
                    title="CHAP"
                    name="COMMUNITY HEALTH ADVANCEMENT PROGRAM"
                    description={this.props.overviews.CHAP.description}
                    imageLocation="images/CHAP/CHAP.jpg"
                    path="/CHAP"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/UDSM');
                  }}
                >
                  <LinkBox
                    title="UDSM"
                    name="UNIVERSITY DISTRICT STREET MEDICINE"
                    description={this.props.overviews.UDSM.description}
                    imageLocation="images/UDSM/UDSM.jpg"
                    path="/UDSM"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/DFAD');
                  }}
                >
                  <LinkBox
                    title="Doc for a Day"
                    name="DFAD"
                    description={this.props.overviews.DFAD.description}
                    imageLocation="images/DFAD/DFAD.jpg"
                    path="/DFAD"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/UMOV');
                  }}
                >
                  <LinkBox
                    title="Mobile Health Outreach Van"
                    name=""
                    description={this.props.overviews.UMOV.description}
                    imageLocation="images/UMOV/UMOV.jpg"
                    path="/UMOV"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/UTEST');
                  }}
                >
                  <LinkBox
                    title="UTest"
                    name="Rapid HIV Testing"
                    description={this.props.overviews.UTEST.description}
                    imageLocation="images/UTEST/UTEST.jpg"
                    path="/UTEST"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <Link to={{pathname: 'Others'}} className={classes.otherProjectsLink}>
                  <div className={classes.otherProjectsDiv}
                  onClick={() => { this.props.history.push('/Others') }}>
                    <Typography variant='h4' className={classes.otherProjectsText}>
                        All other UWSOM Service Learning Projects
                    </Typography>      
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(HomePage));
