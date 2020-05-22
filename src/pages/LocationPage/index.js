import React, { Component } from 'react';
import {
  Button,
  withStyles,
  Typography,
  CssBaseline,
  Paper,
  Fab,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Requirements from '../../components/Requirements';
import NavBar from '../../components/NavBar';
import EventCalendar from '../../components/EventCalendar';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import OpportunityGrid from '../../components/OpportunityGrid/OpportunityGrid';
import BottomBanner from '../../components/BottomBanner';
import { SignInButton } from '../../components/SignInButton/SignInButton'
import '../../App.css';

const styles = () => {
  return {
    page: {
      overflow: 'hidden',
    },
    calendarContainer: {
      backgroundColor: 'white',
      color: 'black',
      margin: '15px auto 0px auto',
      maxWidth: '900px',
    },
    calendarSignIn: {
      textAlign: 'center',
    },
    dialogBody: {
      backgroundColor: '#513E6D',
    },
    dialogButtonDiv: {
      height: "36px",
      margin: '10px 0 10px 0',
      width: '100%'
    },
    dialogSubBody: {
      margin: '10px'
    },
    dialogSignupButton: {
      margin: '0 0 0px 20px',
    },
    dialogDetailsButton: {
      float: 'right',
      margin: '0 20px 0 0',
    },
    directionTitleTop: {
      margin: '0.5em auto 3em auto',
      textAlign: 'center',
      maxWidth: 800,
    },
    directionTitleHeader: {
      fontFamily: 'Lato',
      fontSize: '2em',
      textAlign: 'center',
    },
    directionTitleHeaderBold: {
      fontFamily: 'Lato',
      fontSize: '2.4em',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    directionTitleTopText: {
      fontFamily: 'Lato',
      fontSize: '1.2em',
      marginTop: 5,
      textAlign: 'left',
    },
    directionTitleBottom: {
      textAlign: 'center',
    },
    fabButton: {
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: '1.1em',
      width: '320px',
      marginRight: '1em',
      marginTop: '1em',
    },
    fabButtonHolder: {
      textAlign: 'center',
    },
    gridContainer: {
      marginTop: '1.5em',
      marginBottom: '1em',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    linkBoxContainer: {
      mariginLeft: 'auto',
      marginRight: 'auto',
    },
    otherProjectsDiv: {
      backgroundColor: '#F4EFA8',
      height: 473,
      minWidth: 280,
      border: '1px solid red',
      display: 'table-cell',
      verticalAlign: 'middle',
    },
    otherProjectsLink: {
      textDecoration: 'none',
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
      marginRight: 'auto',
    },
    selectionContainer: {
      maxWidth: 950,
      margin: '15px auto 0 auto',
      textAlign: 'center',
      padding: '2em',
      paddingBottom: '5em',
    },
    signInButton: {
      fontSize: '1.2em',
      margin: '12px 0 12px 0',
    },
    title: {
      fontFamily: 'Lato',
      fontSize: '2em',
      fontWeight: 'bold',
      marginTop: '24px',
      textAlign: 'center',
    },
  };
};

class LocationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarHidden: true,
      providerRequirementsOpen: false,
      medicalRequirementsOpen: false,
      otherGradRequirementsOpen: false,
      undergradRequirementsOpen: false,
    };
  }

  removeSeconds(string) {
    var split = string.split(":");
    console.log(split);
    return split[0] + ":" + split[1] + split[2].substring(2);
  }

  calendarEventClick(info) {
    console.log(info.event);
    this.setState({
      currentEventDate: info.event.start.toDateString().substring(4),
      currentEventDetailsLink: info.event.extendedProps.detailsLink,
      currentEventVolunteers: info.event.extendedProps.volunteers,
      currentEventEndTime: this.removeSeconds(info.event.end.toLocaleTimeString()),
      currentEventSignupLink: info.event.extendedProps.signupLink,
      currentEventStartTime: this.removeSeconds(info.event.start.toLocaleTimeString()),
      currentEventTitle: info.event.title,
      eventClicked: true
    });
  }

  render() {
    const { classes, history, allImages, locations, signedIn } = this.props;
    const location = window.location.pathname.split('/')[2]; // Get location from URL
    const images = allImages[location];
    let opportunityGrid;

    if (locations[location]) {
      opportunityGrid = (
        <OpportunityGrid
          history={history}
          images={images}
          locationData={locations}
          locationName={location}
        />
      );
    } else {
      console.log('Error loading opportunity grid for ' + location);
    }

    var calendarEvents = [];
    // // Demo event
    // calendarEvents.push({
    //   duration : "02:00",
    //   detailsLink: "/org/Seattle/SHIFA/Rotacare", // + "|" + org["Title"],
    //   rrule: "FREQ=WEEKLY;BYDAY=SA;INTERVAL=1;UNTIL=20200620T070000Z",
    //   signupLink : "https://www.wejoinin.com/sheets/uqkya", 
    //   title: "Rotacare",
    //   volunteers: "We need physician preceptors and MS1, MS2, MS3, & MS4 students\r\n"
    // });
    if (locations[location]) {
      Object.keys(locations[location]).forEach(key => { // searching by location
        var value = locations[location][key];
        Object.values(value).forEach(org => { // 
          var date = org["Dates"];
          if (date) {
            calendarEvents.push({
              detailsLink: "/org/" + location + "/" + key + "/" + org["Title"],
              duration : "02:00",
              rrule: org["Dates"],
              signupLink: org["Sign-up Link"].split(',')[0],
              title: org["Title"],
              volunteers: org["Volunteer Openings"]
            });
          }
        })
      });
    }

    return (
      <div className={classes.page}>
        <CssBaseline />
        <NavBar />        
        <Dialog
          open={this.state.eventClicked}
          onClose={() => this.setState({ eventClicked: false })} >
          <div className={classes.dialogBody}>
            <DialogContent>
              <Typography variant ="h5"> {this.state.currentEventDate} </Typography>
              <Typography variant="h5"> {this.state.currentEventStartTime} - {this.state.currentEventEndTime} </Typography>
              <p style={{color: 'white'}}> {this.state.currentEventVolunteers} </p>
            
              <p style={{color: 'white'}}> Please see DETAILS to confirm that you 
                have the correct training/onboarding to sign up for this event 
              </p>
              <div className={classes.dialogButtonDiv}>
                { signedIn ?
                  <Button
                    className={classes.dialogSignupButton}
                    color="secondary"
                    href={this.state.currentEventSignupLink}
                    size="medium"
                    target="_blank"
                    variant="contained" >
                    Sign Up
                  </Button>
                : <div style={{display: 'inline' }}>
                    <SignInButton />
                  </div>
                }
                <Button
                  className={classes.dialogDetailsButton}
                  color="secondary"
                  href={this.state.currentEventDetailsLink}
                  size="medium"
                  target="_blank"
                  variant="contained" >
                  Details
                </Button>
              </div>
            </DialogContent>
          </div>
        </Dialog>

        {/* Calendar div with authentication */}
        
        {!this.state.calendarHidden ? (
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
                events={calendarEvents} 
              />
            </div>
          </div>) : 
            <div className={classes.calendarSignIn}>
              <Button 
              className={classes.signInButton}
              color="secondary"
              variant="contained"
              onClick={() => this.setState({calendarHidden: false})}>
              Show Event Calendar
            </Button>
          </div> }

        {/* Modals */}

        <Requirements
          open={this.state.medicalRequirementsOpen}
          title="Medical Student Requirements"
          data={this.props.prerequisites['Medical Students']}
          handleClose={() => this.setState({ medicalRequirementsOpen: false })}
        />

        <Requirements
          open={this.state.undergradRequirementsOpen}
          title="Undergraduate Student Requirements"
          data={this.props.prerequisites['Undergraduates']}
          handleClose={() =>
            this.setState({ undergradRequirementsOpen: false })
          }
        />
        <Requirements
          open={this.state.otherGradRequirementsOpen}
          title="Other HS Graduate Student Requirements"
          data={this.props.prerequisites['Other HS Graduate Students']}
          handleClose={() =>
            this.setState({ otherGradRequirementsOpen: false })
          }
        />
        <Requirements
          open={this.state.providerRequirementsOpen}
          title="Provider Requirements"
          data={this.props.prerequisites['Providers']}
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

export default withStyles(styles)(withRouter(LocationPage));
