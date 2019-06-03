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
    textAlign: "center"
  },
  paperContainer: {
    padding: "2em",
    margin: "1.5em",
    maxWidth: 850,
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
    maxWidth: 900,
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
          <Typography variant="h4">View Requirements</Typography>
        </div>

        <Paper className={classes.paperContainer}>
          <Typography variant="h5">Select Your Category</Typography>
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
            <Typography variant="h4">Organizations</Typography>
          </div>

          <div className={classes.gridContainer}>
            <Grid container spacing={24}>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="SHIFA"
                    description="Student Health Initiative For Access"
                    imageLocation="images/SHIFA.jpg"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="CHAP"
                    description="Community Health Advancement Program"
                    imageLocation="images/CHAP.jpg"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="UDSM"
                    description="University District Street Medicine"
                    imageLocation="images/UDSM.png"
                  />
                </div>
              </Grid>
              <Grid item xs>
                <div className={classes.linkBoxContainer}>
                  <LinkBox
                    title="Doc for a Day"
                    description="Doctor for a Day"
                    imageLocation="images/DD.jpg"
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
