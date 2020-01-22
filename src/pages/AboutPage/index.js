import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import NavBar from "../../components/NavBar";

const styles = () => ({
  page: {
    overflow: "hidden"
  },
  description: {
    fontFamily: 'Lato',
    maxWidth: 750,
    marginBottom: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white"
  },

  directionTitleTop: {
    fontFamily: 'Lato',
    marginTop: "2em",
    textAlign: "center",
    marginBottom: "15px"
  },
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
      
        <div>
          <Typography className={classes.directionTitleTop} variant="h4">Goals</Typography>
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
