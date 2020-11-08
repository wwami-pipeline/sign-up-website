import React, { Component, useState } from 'react';
import {
  Button,
  withStyles,
  Typography,
  CssBaseline,
  Paper,
  Fab,
  createStyles,
  Dialog,
  DialogContent
} from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Requirements from '../../components/Requirements';
import NavBar from '../../components/NavBar';
import EventCalendar from '../../components/EventCalendar';

import OpportunityGrid from '../../components/OpportunityGrid';
import BottomBanner from '../../components/BottomBanner';
import { SignInButton } from '../../components/SignInButton/SignInButton';
import '../../App.css'; // Legacy styling, rest is CSS-in-JSS

interface LocationPageProps extends RouteComponentProps<RouterProps> {
  classes: any; // CSS-in-JS styling
  history: any;
  allImages: any;
  locations: any;
  signedIn: any;
  overviews: any;
  prerequisites: any;
}

const removeSeconds = (string: string) => {
  var split = string.split(':');
  return split[0] + ':' + split[1] + split[2].substring(2);
}

const LocationPage: React.FC<LocationPageProps> = (props) => {
  const { classes, history, allImages, locations, signedIn } = props;

  // Open Booleans
  const [calendarHidden, setCalendarHidden] = useState<boolean>(true);
  const [providerRequirementsOpen, setProviderRequirementsOpen] = useState<boolean>(false);
  const [medicalRequirementsOpen, setMedicalRequirementsOpen] = useState<boolean>(false);
  const [otherGradRequirementsOpen, setOtherGradRequirementsOpen] = useState<boolean>(false);
  const [undergradRequirementsOpen, setUndergradRequirementsOpen] = useState<boolean>(false);
  // Calendar Search
  const [searchText, setSearchText] = useState<string>("");
  // Calendar Event Modal
  const [currentEventDate, setCurrentEventDate] = useState<string>("");
  const [currentEventDetailsLink, setCurrentEventDetailsLink] = useState<string>("");
  const [currentEventVolunteers, setCurrentEventVolunteers] = useState<string>("");
  const [currentEventEndTime, setCurrentEventEndTime] = useState<string>("");
  const [currentEventSignupLink, setCurrentEventSignUpLink] = useState<string>("");
  const [currentEventStartTime, setCurrentEventStartTime] = useState<string>("");
  const [currentEventTitle, setCurrentEventTitle] = useState<string>("");
  const [eventClicked, setEventClicked] = useState<boolean>(false);

  // Calendar Event/Search Methods
  const calendarEventClick = (info) => {
    setCurrentEventDate(info.event.start.toDateString().substring(4));
    setCurrentEventDetailsLink(info.event.extendedProps.detailsLink);
    setCurrentEventVolunteers(info.event.extendedProps.volunteers);
    setCurrentEventEndTime(removeSeconds(
      info.event.end.toLocaleTimeString()
    ));
    setCurrentEventSignUpLink(info.event.extendedProps.signupLink)
    setCurrentEventStartTime(removeSeconds(
      info.event.start.toLocaleTimeString()
    ));
    setCurrentEventTitle(info.event.title);
    setEventClicked(true);
  }
  const clearSearchText = () => {
    setSearchText('');
  };
  const updateSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const location = window.location.pathname.split('/')[2]; // Get location from URL
  // alert(JSON.stringify(allImages))
  const images = allImages ? allImages[location] : null;
  let opportunityGrid;
  if (locations && locations[location]) {
    opportunityGrid = (
      <OpportunityGrid
        history={history}
        images={images}
        locationData={locations}
        locationName={location}
      />
    );
  } else {
    opportunityGrid = <div />;
    // console.log('Error loading opportunity grid for ' + location);
  }
  let calendarEvents: any[] = [];
  if (locations && locations[location]) {
    Object.keys(locations[location]).forEach((key) => {
      // searching by location
      var value = locations[location][key];
      Object.values(value).forEach((org: any) => {
        var date = org['Dates'];
        // TODO: fix temporary search feature
        if (
          date &&
          org['Project Description'].includes(searchText)
        ) {
          for (var i = 0; i < Object.values(date).length; i++) {
            let link: string = "";
            if (date[i].link) {
              if (date[i].link.includes('http')) {
                link = date[i].link;
              } else {
                link = 'http://' + date[i].link;
              }
            }
            calendarEvents.push({
              detailsLink:
                '/org/' + location + '/' + key + '/' + org['Title'],
              duration: date[i].duration,
              rrule: date[i].rrule,
              signupLink: link ? link : '',
              title: org['Title'],
              volunteers: org['Volunteer Openings'],
            });
          }
        }
      });
    });
  }

  return (
    <div className={classes.page}>
      <CssBaseline />
      <NavBar />
      <Dialog
        open={eventClicked}
        onClose={() => setEventClicked(false)}
      >
        <div className={classes.dialogBody}>
          <DialogContent>
            <Typography variant="h5">
              {' '}
              {currentEventDate}{' '}
            </Typography>
            <Typography variant="h5">
              {' '}
              {currentEventStartTime} -{' '}
              {currentEventEndTime}{' '}
            </Typography>
            <p style={{ color: 'white' }}>
              {' '}
              {currentEventVolunteers}{' '}
            </p>

            <p style={{ color: 'white' }}>
              {' '}
              Please see DETAILS to confirm that you have the correct
              training/onboarding to sign up for this event
            </p>
            <div className={classes.dialogButtonDiv}>
              {signedIn ? (
                <Button
                  className={classes.dialogSignupButton}
                  color="secondary"
                  size="medium"
                  target="_blank"
                  variant="contained"
                  {...(currentEventSignupLink !== ''
                    ? { href: currentEventSignupLink }
                    : '')}
                >
                  {currentEventSignupLink !== ''
                    ? 'Sign Up'
                    : 'No Sign-Up Link'}
                </Button>
              ) : (
                  <div style={{ display: 'inline' }}>
                    <SignInButton />
                  </div>
                )}
              <Button
                className={classes.dialogDetailsButton}
                color="secondary"
                href={currentEventDetailsLink}
                size="medium"
                target="_blank"
                variant="contained"
              >
                Details
              </Button>
            </div>
          </DialogContent>
        </div>
      </Dialog>

      {/* Calendar div with authentication */}
      {!calendarHidden ? (
        <div>
          <div className={classes.calendarSignIn}>
            <Button
              className={classes.signInButton}
              color="secondary"
              variant="contained"
              onClick={() => setCalendarHidden(true)}
            >
              Hide Calendar
            </Button>
          </div>
          <div className={classes.calendarContainer}>
            {/* NOTE: SEARCH BOX CAUSES APP TO CRASH */}
            {/* <div>
              <input
                className={classes.searchBar}
                ref="searchInput"
                type="text"
                placeholder="Search Here"
                onChange={(e) => updateSearchText(e)}
              />
              <Button
                className={classes.searchClear}
                color="secondary"
                onClick={clearSearchText}
                size="medium"
              >
                Clear
              </Button>
            </div> */}
            <EventCalendar
              eventClickFn={(e) => calendarEventClick(e)}
              events={calendarEvents}
            />
          </div>
        </div>
      ) : (
          <div className={classes.calendarSignIn}>
            <Button
              className={classes.signInButton}
              color="secondary"
              variant="contained"
              onClick={() => setCalendarHidden(false)}
            >
              Show Event Calendar
          </Button>
          </div>
        )}

      {/* Requirement Modals */}
      <Requirements
        open={medicalRequirementsOpen}
        title="Medical Student Requirements"
        data={props.prerequisites && props.prerequisites[location]['Medical Students']}
        handleClose={() => setMedicalRequirementsOpen(false)}
      />

      <Requirements
        open={undergradRequirementsOpen}
        title="Undergraduate Student Requirements"
        data={props.prerequisites && props.prerequisites[location]['Undergraduates']}
        handleClose={() => setUndergradRequirementsOpen(false)}
      />
      <Requirements
        open={otherGradRequirementsOpen}
        title="Other HS Graduate Student Requirements"
        data={props.prerequisites && props.prerequisites[location]['Other HS Graduate Students']}
        handleClose={() => setOtherGradRequirementsOpen(false)}
      />
      <Requirements
        open={providerRequirementsOpen}
        title="Provider Requirements"
        data={props.prerequisites && props.prerequisites[location]['Providers']}
        handleClose={() => setProviderRequirementsOpen(false)}
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
            onClick={() => setProviderRequirementsOpen(true)}
          >
            Providers
          </Fab>
          <Fab
            color="secondary"
            style={{ color: '#2E1159' }}
            variant="extended"
            className={classes.fabButton}
            onClick={() => setMedicalRequirementsOpen(true)}
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
            onClick={() => setOtherGradRequirementsOpen(true)}
          >
            Other HS Graduate Students
          </Fab>
          <Fab
            color="secondary"
            style={{ color: '#2E1159' }}
            variant="extended"
            className={classes.fabButton}
            onClick={() => setUndergradRequirementsOpen(true)}
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

const styles = createStyles({
  page: {
    overflow: 'hidden',
  },
  calendarContainer: {
    backgroundColor: 'white',
    color: 'black',
    margin: '15px auto 0px auto',
    maxWidth: '900px',
    textAlign: 'center',
  },
  calendarSignIn: {
    textAlign: 'center',
  },
  dialogBody: {
    backgroundColor: '#513E6D',
  },
  dialogButtonDiv: {
    height: '36px',
    margin: '10px 0 10px 0',
    width: '100%',
  },
  dialogSubBody: {
    margin: '10px',
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
  searchBar: {
    margin: '10px 0 -5px 0',
    fontSize: '18px',
  },
  searchClear: {
    backgroundColor: '#2E1159',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    height: '32px',
    margin: '-10px 0 -5px 10px',
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
});

export default withStyles(styles)(withRouter(LocationPage));
