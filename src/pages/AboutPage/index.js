import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Card,
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
  description: {
    maxWidth: 750,
    textAlign: "center",
    marginBottom: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white"
  },

  directionTitleTop: {
    marginTop: "2em",
    textAlign: "center",
    marginBottom: "15px"
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

class AboutPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <NavBar />          
        </AppBar>

        <div className={classes.directionTitleTop}>
          <Typography variant="h4">Our Goal</Typography>
        </div>
      
        <div>
          <Typography variant="subtitle1" className={classes.description}>
            The UW School of Medicine's Service Learning program strives to enrich medical education
            by providing our students with opportunities to hone their skills while addressing the
            health needs of our underserved communities. We seek to foster the joy of service in our
            students who are preparing for lives of civic and social responsibility in an increasingly
            diverse and complex global society.
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            These goals could not be achieved without strong community partnerships, dedicated
            supervising providers, and collaboration with the other six health sciences schools.
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Please take a moment to glance through the amazing clinical and mentoring projects
            on this website that have been developed by our students over the past ten years.
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
