import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  CssBaseline,
  Paper,
  Fab,
  Grid,
  Button
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import MedicalStudentRequirements from '../../components/MedicalStudentRequirements';
import OtherGraduateRequirements from '../../components/OtherGraduateRequirements';
import UndergraduateRequirements from '../../components/UndergraduateRequirements';
import ProviderRequirements from '../../components/ProviderRequirements';
import NavBar from '../../components/NavBar';
import EventCalendar from '../../components/EventCalendar';
import AlaskaGrid from '../../components/OpportunityGrid/AlaskaGrid';
import SeattleGrid from '../../components/OpportunityGrid/SeattleGrid';
import LinkBox from '../../components/LinkBox';
import { Link } from 'react-router-dom';

import '../../App.css';
import BottomBanner from '../../components/BottomBanner';

const styles = () => {
  return {
    page: {
      overflow: 'hidden'
    },
    calendarContainer: {
      backgroundColor: 'white',
      color: 'black',
      margin: '15px auto 0px auto',
      maxWidth: '900px'
    },
    calendarSignIn: {
      textAlign: 'center'
    },
    directionTitleTop: {
      margin: '0.5em auto 3em auto',
      textAlign: 'center',
      maxWidth: 800
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
    },
    signInButton: {
      fontSize: '1.2em',
      margin: '12px 0 12px 0'
    },
    title: {
      fontFamily: 'Lato',
      fontSize: '2em',
      fontWeight: 'bold',
      marginTop: '24px',
      textAlign: 'center'
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

  calendarEventClick(info) {
    alert(info.event.title + ': ' + info.event.extendedProps.description);
  }

  render() {
    const { classes, history, allImages, overviews } = this.props;
    const location = window.location.pathname.split('/')[2]; // Get location from URL
    const images = allImages[location];
    var opportunityGrid;
    switch (location) {
      case 'Alaska':
        opportunityGrid = (
          <AlaskaGrid overviews={overviews} history={history} images={images} />
        );
        break;
      case 'Seattle':
        opportunityGrid = (
          <SeattleGrid
            overviews={overviews}
            history={history}
            images={images}
          />
        );
        break;
      // case "Spokane" : opportunityGrid = <SpokaneGrid overviews={overviews} history={history}/>; break;
      // case "Montana" : opportunityGrid = <MontanaGrid overviews={overviews} history={history}/>; break;
      // case "Idaho"   : opportunityGrid = <IdahoGrid overviews={overviews} history={history}/>; break;
      // case "Wyoming" : opportunityGrid = <WyomingGrid overviews={overviews} history={history}/>; break;
      default:
        console.log('Error loading opportuniy grid');
        break;
    }

    return (
      <div className={classes.page}>
        <CssBaseline />
        <NavBar />

        {/* {!this.state.authenticated ? (
          <div className={classes.calendarSignIn}>
          <Typography className={classes.title}>
            Sign in required to access calendar
          </Typography>
          <Button 
            className={classes.signInButton}
            color="secondary"
            variant="contained"
            onClick={() => this.setState({authenticated: true})}>
            UW Sign In
          </Button>        
        </div>
        ) : !this.state.calendarHidden ? (
        <div>
          <div className={classes.calendarSignIn}>
            <Button 
              className={classes.signInButton}
              color="secondary"
              variant="contained"
              onClick={() => this.setState({calendarHidden: true})}>
              Hide Calendar
            </Button>
          </div>
          <div className={classes.calendarContainer}>
            <EventCalendar 
              eventClickFn={e => this.calendarEventClick(e)}
              // events={[
              //   { rrule: 'DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20120601;BYDAY=MO,FR' }
              //   // {title: 'event 1', date: '2020-02-26', description: 'test' },
              //   // {title: 'event 2', date: '2020-02-26', description: 'test1' },
              //   // {title: 'event 3', date: '2020-02-26' },
              //   // {title: 'event 4', date: '2020-02-26' },
              //   // {title: 'event 5', date: '2020-02-26' }
              // ]} 
            />
          </div>
        </div>) : 
          <div className={classes.calendarSignIn}>
            <Button 
            className={classes.signInButton}
            color="secondary"
            variant="contained"
            onClick={() => this.setState({calendarHidden: false})}>
            Show Calendar
          </Button>
          </div> }        */}

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

          <div className={classes.gridContainer}>{opportunityGrid}</div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(HomePage));
