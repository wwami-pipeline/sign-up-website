import React from "react";
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  createStyles
} from "@material-ui/core";
import NavBar from "../../components/NavBar";
import BottomBanner from '../../components/BottomBanner';

const styles = createStyles({
  page: {
    overflow: "hidden",
  },
  contactSection: {
    maxWidth: 850,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleTop: {
    fontFamily: 'Lato',
    margin: '30px 0 15px 0',
    textAlign: 'center'
  },
  secondaryTitle: {
    fontFamily: 'Lato',
    maxWidth: 850,
    margin: "15px 0 15px 0",
    textAlign: "center",
  },
  contactBlock: {
    fontFamily: 'Lato',
    fontSize: '1.2em',
    margin: '10px 0 0 0',
  },
  contactBlockBold: {
    fontFamily: 'Lato',
    fontSize: '1.4em',
    fontWeight: 'bold',
    marginTop: '1em',
  }
});

const AboutPage: React.FC<{ classes: any }> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.page}>
      <CssBaseline />
      <AppBar position="static">
        <NavBar />
      </AppBar>

      <div className={classes.contactSection}>
        <Typography className={classes.titleTop} variant="h4">
          CONTACT US
          </Typography>
        <Typography className={classes.secondaryTitle} variant="h5">
          Questions? We'd love to hear from you.
          </Typography>

        <div>
          <Typography className={classes.contactBlockBold}>Leonora Clarke, Service Learning Manager, UW School of Medicine </Typography>
          <Typography className={classes.contactBlock} >clarkel@uw.edu <br />
          206-685-2009 <br />
          Health Sciences Building, Suite A-300</Typography>
        </div>

        <div>
          <Typography className={classes.contactBlockBold}> Mailing Address </Typography>
          <Typography className={classes.contactBlock}>
            1959 NE. Pacific Ave. Suite A-300 <br />
          Box 356340 <br />
          Seattle, WA  98195 </Typography>
        </div>
      </div>
      <BottomBanner />
    </div>
  );
}

export default withStyles(styles)(AboutPage);
