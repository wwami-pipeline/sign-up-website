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
    fontFamily: 'Lato',
    fontWeight: 'bold',
    maxWidth: 850,
    marginTop: "1em",
    textAlign: "center",
  },
  buttonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2em",
    textAlign: "center",
    display: 'block'
  },
  donationButtonMain: {
    backgroundColor: '#836ba6',
    color: 'white',
    border: 'none',
    padding: '20px 30px',
    fontFamily: 'Lato',
    fontSize: '28px',
    margin: 'auto',
    marginBottom: '10px',
    display: 'flex'
  },
  donationButtonSeconday: {
    backgroundColor: '#836ba6',
    color: 'white',
    border: 'none',
    padding: '20px 30px',
    fontFamily: 'Lato',
    fontSize: '20px',
    margin: 'auto',
    marginBottom: '5px',
    display: 'flex'
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
          <Typography className={classes.topDonationText} variant="h5">CONSIDER A GIFT TO THE</Typography>
          <Typography className={classes.donationText} variant="h4">UWSOM MEDICINE SERVICE LEARNING FUND</Typography>
          <Typography className={classes.donationText}variant="h4">YOUR SUPPORT WILL HELP TO SUSTAIN OUR EFFORTS!</Typography>
          <div className={classes.buttonContainer}>
            <button
              className={classes.donationButtonMain}
              href="http://depts.washington.edu/givemed/give/?page=make&source=servmd">
              Make A Gift
            </button>
          </div>
          <Typography className={classes.donationText}variant="h4">SPECIFIC PROJECT FUNDRAISING PAGES</Typography>
          <div className={classes.buttonContainer}>
            <button
              className={classes.donationButtonSeconday}
              href="https://online.gifts.washington.edu/peer2peer/campaign/b2a0bc42-b48b-49c7-8615-4a6fc1ad53c2">
              HEALTH SCIENCES MOBILE HEALTH VAN
            </button>
            <button
              className={classes.donationButtonSeconday}
              href="https://online.gifts.washington.edu/peer2peer/campaign/5c9028f3-582b-449d-ba71-91e56490e82f">
              SHIFA
            </button>
            <button
              className={classes.donationButtonSeconday}
              href="https://online.gifts.washington.edu/peer2peer/campaign/44c375de-6bec-40cf-8e99-e8af258b04d9">
              UDSM
            </button>
            <button
              className={classes.donationButtonSeconday}
              href="https://online.gifts.washington.edu/peer2peer/Campaign/d929d3c5-a01a-45cd-b84f-80925a2fc6e3">
              UTEST
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
