import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline
} from "@material-ui/core";
import NavBar from "../../components/NavBar";

const styles = () => ({
  page: {
    overflow: "hidden",
  },
  contactSection: {
    maxWidth: 850,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontFamily: 'Lato',
    maxWidth: 850,
    marginTop: "2em",
    textAlign: "center",
    marginBottom: "15px"
  },
  secondaryTitle: {
    fontFamily: 'Lato',
    maxWidth: 850,
    marginTop: "1em",
    textAlign: "center",
    marginBottom: "15px"
  },
  contactBlock: {
    fontFamily: 'Lato',
    marginTop: '1em',
  },
  contactBlockBold: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
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
            <Typography className={classes.title} variant="h4">Contact Us</Typography>
            <Typography className={classes.secondaryTitle} variant="h5">Questions? We'd love to hear from you.</Typography>

          <div>
            <Typography className={classes.contactBlockBold}>Leonora Clarke, Service Learning Manager, UW School of Medicine </Typography> 
            <Typography className={classes.contactBlock} >clarkel@uw.edu <br/>
            206-685-2009 <br/>
            Health Sciences Building, Suite A-300</Typography> 
          </div>

          <div>
            <Typography className={classes.contactBlockBold}> Mailing Address </Typography>
            <Typography className={classes.contactBlock}>
            1959 NE. Pacific Ave. Suite A-300 <br/>
            Box 356340 <br/>
            Seattle, WA  98195 </Typography> 
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
