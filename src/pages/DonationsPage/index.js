import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Fab
} from "@material-ui/core";
import NavBar from "../../components/NavBar";

const styles = () => ({
  page: {
    overflow: "hidden"
  },
  donateSection: {
    maxWidth: 850,
    marginLeft: "auto",
    marginRight: "auto"
  },
  topDonationText: {
    fontFamily: 'Lato',
    maxWidth: 850,
    marginTop: "3em",
    textAlign: "center",
  },
  donationText: {
    maxWidth: 850,
    marginTop: "1em",
    textAlign: "center",
  },
  buttonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2em",
    textAlign: "center"
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

        <div className={classes.donateSection}>
          <div className={classes.topDonationText}>
            <Typography variant="h5">Consider A Gift To The</Typography>
          </div>
          <div className={classes.donationText}>
            <Typography variant="h4">UWSOM Medicine Service Learning Fund</Typography>
          </div>
          <div className={classes.donationText}>
            <Typography variant="h5">You Will Help To Sustain our Efforts!</Typography>
          </div>
          <div className={classes.buttonContainer}>
            <Fab
              variant="extended"
              className={classes.fabButton}
              href="http://depts.washington.edu/givemed/give/?page=make&source=servmd"
            >
              Make A Gift
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
