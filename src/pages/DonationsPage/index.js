import React, { Component } from "react";
import {
  AppBar,
  Button,
  withStyles,
  Typography,
  CssBaseline
} from "@material-ui/core";
import Header from "../../components/Header";

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
    marginTop: "2em",
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
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: '10px',
    display: 'flex'
  },
  donationButtonSecondary: {
    backgroundColor: '#836ba6',
    border: 'none',
    color: 'white',
    display: 'inherit',
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: '5px',
    padding: '15px 15px',
    textAlign: 'center',
    width: '400px',
  }
});

class AboutPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <Header />          
        </AppBar>

        <div className={classes.donateSection}>
          <Typography className={classes.topDonationText} variant="h5">Consider A Gift To The </Typography>
          <Typography className={classes.donationText} variant="h4">UWSOM MEDICINE SERVICE LEARNING FUND</Typography>
          <Typography className={classes.donationText}variant="h5">
            Your Support Will Help To Sustain Our Efforts!
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.donationButtonMain}
              href="http://depts.washington.edu/givemed/give/?page=make&source=servmd"
              target="_blank">
              Make A Gift
            </Button>
          </div>
          <Typography className={classes.donationText}variant="h4">
            Specific Project Fundraising Pages
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.donationButtonSecondary}
              href="https://online.gifts.washington.edu/peer2peer/campaign/b2a0bc42-b48b-49c7-8615-4a6fc1ad53c2"
              target="_blank">
              HEALTH SCIENCES MOBILE HEALTH VAN
            </Button>
            <Button
              className={classes.donationButtonSecondary}
              href="https://online.gifts.washington.edu/peer2peer/campaign/5c9028f3-582b-449d-ba71-91e56490e82f"
              target="_blank">
              SHIFA
            </Button>
            <Button
              className={classes.donationButtonSecondary}
              href="https://online.gifts.washington.edu/peer2peer/campaign/44c375de-6bec-40cf-8e99-e8af258b04d9"
              target="_blank">
              UDSM
            </Button>
            <Button
              className={classes.donationButtonSecondary}
              href="https://online.gifts.washington.edu/peer2peer/Campaign/d929d3c5-a01a-45cd-b84f-80925a2fc6e3"
              target="_blank">
              UTEST
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
