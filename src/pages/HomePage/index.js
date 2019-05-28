import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  withStyles,
  Typography,
  CssBaseline,
  Paper,
  Fab,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LinkBox from "../../components/LinkBox";

const styles = theme => ({
  page: {
    overflow: "hidden"
  },
  paperContainer: {
    padding: '2em',
    margin: '2em',
    maxWidth: 850,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fabButton: {
    marginRight: '1em',
    marginTop: '1em',
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
  directionTitle: {
    marginTop: "2em",
    textAlign: "center"
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
    modal: false,
    secondsElapsed: 0,
    timeElapsed: null,
    openThrusterPasswordErrorKey: null,
    openThrusterErrorKey: null,
    closeThrusterErrorKey: null
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Volunteer Sign Up
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.directionTitle}>
          <Typography variant="h3">Volunteering Requirements</Typography>
        </div>

        <Paper className={classes.paperContainer}>
          <Typography variant="h4">Select Your Category</Typography>
          <Fab variant="extended" className={classes.fabButton}>
            Providers
          </Fab>
          <Fab variant="extended" className={classes.fabButton}>
            Medical Students
          </Fab>
          <Fab variant="extended" className={classes.fabButton}>
            Other Health Science Graduate Students
          </Fab>
          <Fab variant="extended" className={classes.fabButton}>
            Undergraduates
          </Fab>
        </Paper>

        <div className={classes.selectionContainer}>
          <div className={classes.directionTitle}>
            <Typography variant="h3">Volunteer For An Organization</Typography>
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
