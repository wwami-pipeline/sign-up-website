import React, { Component } from "react";
import {
  AppBar,
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

const styles = theme => ({
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
  directionTitleTopText: {
    marginTop: 5,
    textAlign: 'left'
  },
  paperContainer: {
    padding: "2em",
    margin: "1.5em",
    maxWidth: 900,
    marginLeft: "auto",
    marginRight: "auto"
  },
  fabButton: {
    marginRight: "1em",
    marginTop: "1em"
  },
  directionTitleBottom: {
    textAlign: "center"
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
        <AppBar position="static">
          <NavBar />
        </AppBar>

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
          <Typography variant="h4">Volunteer With Us</Typography>
          <Typography className={classes.directionTitleTopText}>We invite you to explore our many opportunities for providers and students alike.  Volunteering with our program is a wonderful way to practice your clinical and teaching skills, make a difference in our community and form meaningful connections.</Typography>
          <Typography className={classes.directionTitleTopText}>We very flexible and try to make it easy to work around busy schedules.  There is no required hourly commitment.  Simply sign up when you have the time!</Typography>
        </div>

        <Paper className={classes.paperContainer}>
          <Typography variant="h4">Here's What You Need To Know To Get Started</Typography>
          <Fab
            variant="extended"
            className={classes.fabButton}
            onClick={() => this.setState({ providerRequirementsOpen: true })}
          >
            Providers
          </Fab>
          <Fab
            variant="extended"
            className={classes.fabButton}
            onClick={() => this.setState({ medicalRequirementsOpen: true })}
          >
            Medical Students
          </Fab>
          <Fab
            variant="extended"
            className={classes.fabButton}
            onClick={() => this.setState({ otherGradRequirementsOpen: true })}
          >
            Other Health Science Graduate Students
          </Fab>
          <Fab
            variant="extended"
            className={classes.fabButton}
            onClick={() => this.setState({ undergradRequirementsOpen: true })}
          >
            Undergraduates
          </Fab>
        </Paper>

        {/* Organizations */}

        <div className={classes.selectionContainer}>
          <div className={classes.directionTitleBottom}>
            <Typography variant="h4">Find An Opportunity</Typography>
          </div>

          <div className={classes.gridContainer}>
            <Grid container spacing={24}>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="SHIFA"
                    name="Student Health Initiative For Access"
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
                    name="Community Health Advancement Program"
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
                    name="University District Street Medicine"
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
                    path="/DoD"
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
