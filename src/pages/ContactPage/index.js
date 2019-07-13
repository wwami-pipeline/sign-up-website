import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline
} from "@material-ui/core";
import NavBar from "../../components/NavBar";

const styles = theme => ({
  page: {
    overflow: "hidden",
  },
  contactSection: {
    maxWidth: 850,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    maxWidth: 850,
    marginTop: "2em",
    textAlign: "center",
    marginBottom: "15px"
  },
  secondaryTitle: {
    maxWidth: 850,
    marginTop: "1em",
    textAlign: "center",
    marginBottom: "15px"
  },
  contactBlock: {
    marginTop: '1em',
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

        <div className={classes.contactSection}>
          <div className={classes.title}>
            <Typography variant="h4">Contact Us</Typography>
          </div>

          <div className={classes.secondaryTitle}>
            <Typography variant="h5">Questions? We'd love to hear from you.</Typography>
          </div>

          <div className={classes.contactBlock}>
            <Typography>Leonora Clarke, Service Learning Manager, UW School of Medicine </Typography> 
            <Typography>clarkel@uw.edu</Typography> 
            <Typography>206-685-2009</Typography> 
            <Typography>Health Sciences Building, Suite A-300</Typography> 
          </div>

          <div className={classes.contactBlock}>
            <Typography>Mailing Address</Typography> 
            <Typography>1959 NE. Pacific Ave. Suite A-300</Typography> 
            <Typography>Box 356340</Typography> 
            <Typography>Seattle, WA  98195</Typography> 
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
