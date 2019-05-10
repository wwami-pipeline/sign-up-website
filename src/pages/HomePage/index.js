import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  withStyles,
  Typography,
  CssBaseline
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  page: {
    overflow: "hidden"
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
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
