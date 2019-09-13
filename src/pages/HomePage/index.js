import React, { Component } from "react";
import {
  withStyles,
  Typography,
  CssBaseline,
  Paper,
  Fab,
  Grid
} from "@material-ui/core";
import LinkBox from "../../components/LinkBox";
import MedicalStudentRequirements from "../../components/MedicalStudentRequirements";
import OtherGraduateRequirements from "../../components/OtherGraduateRequirements";
import UndergraduateRequirements from "../../components/UndergraduateRequirements";
import ProviderRequirements from "../../components/ProviderRequirements";
import NavBar from "../../components/NavBar";

const styles = () => {
  return ({
    page: {
      overflow: "hidden"
    },
    directionTitleTop: {
      marginTop: "2em",
      textAlign: "center",
      marginBottom: "3em",
      maxWidth: 800,
      marginLeft: "auto",
      marginRight: "auto"
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
      textAlign: "center"
    },
    fabButton: {
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: '1.1em',
      width: '400px',
      marginRight: '1em',
      marginTop: '1em',
    },
    fabButtonHolder: {
      textAlign: 'center'
    },
    paperContainer: {
      backgroundColor: '#513E6D',
      padding: "2em",
      margin: "1.5em",
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto"
    },
    selectionContainer: {
      maxWidth: 950,
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      padding: "2em",
      paddingBottom: "5em",
      margin: "1em"
    },
    gridContainer: {
      marginTop: "1.5em",
      marginBottom: "1em",
      marginLeft: "auto",
      marginRight: "auto"
    },
    linkBoxContainer: {
      mariginLeft: "auto",
      marginRight: "auto"
    }
  });
};

class HomePage extends Component {
  state = {
    providerRequirementsOpen: false,
    medicalRequirementsOpen: false,
    otherGradRequirementsOpen: false,
    undergradRequirementsOpen: false
  };

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
          <Typography className={classes.directionTitleHeaderBold}>VOLUNTEER WITH US</Typography>
          <Typography className={classes.directionTitleTopText}>We invite you to explore our many opportunities for providers and students alike.  Volunteering with our program is a wonderful way to practice your clinical and teaching skills, make a difference in our community and form meaningful connections.</Typography>
          <Typography className={classes.directionTitleTopText}>We very flexible and try to make it easy to work around busy schedules.  There is no required hourly commitment.  Simply sign up when you have the time!</Typography>
        </div>

        <Paper className={classes.paperContainer}>
          <Typography className={classes.directionTitleHeader}>Here's What You Need To Know To Get Started</Typography>
          <div className={classes.fabButtonHolder}>
            <Fab color="secondary"
              style={{color: "#2E1159"}}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ providerRequirementsOpen: true })}
            >
              Providers
            </Fab>
            <Fab color="secondary"
              style={{color: "#2E1159"}}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ medicalRequirementsOpen: true })}
            >
            Medical Students
            </Fab>
          </div>
          <div className={classes.fabButtonHolder}>
            <Fab color="secondary"
              style={{color: "#2E1159"}}
              variant="extended"
              className={classes.fabButton}
              onClick={() => this.setState({ otherGradRequirementsOpen: true })}
            >
              Other HS Graduate Students
            </Fab>
            <Fab color="secondary"
              style={{color: "#2E1159"}}
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
            <Typography className={classes.directionTitleHeaderBold}>FIND AN OPPORTUNITY</Typography>
          </div>

          <div className={classes.gridContainer}>
            <Grid container spacing={24}>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="SHIFA"
                    name="STUDENT HEALTH INITIATIVE FOR ACCESS"
                    description={this.props.overviews.SHIFA}
                    imageLocation="images/SHIFA.jpg"
                    path="/SHIFA"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="CHAP"
                    name="COMMUNITY HEALTH ADVANCEMENT PROGRAM"
                    description={this.props.overviews.CHAP}
                    imageLocation="images/CHAP.jpg"
                    path="/CHAP"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="UDSM"
                    name="UNIVERSITY DISTRICT STREET MEDICINE"
                    description={this.props.overviews.UDSM}
                    imageLocation="images/UDSM.png"
                    path="/UDSM"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="Doc for a Day"
                    name="DFAD"
                    description={this.props.overviews.DFAD}
                    imageLocation="images/DFAD.JPG"
                    path="/DFAD"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
