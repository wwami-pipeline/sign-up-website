import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";

const styles = () => ({
  title: {
    marginBottom: '.5em',
  },
  text: {
    marginBottom: '1em',
  }
});

class ProviderRequirements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          fullWidth
        >
          <DialogTitle><Typography variant="h4">Providers</Typography></DialogTitle>
          <DialogContent className={this.props.dialogContent}>
            <Typography className={classes.text}>Fill out a brief survey <Link color="secondary" href="https://catalyst.uw.edu/webq/survey/clarkel/374890">here</Link>.</Typography>
            <Typography className={classes.text}>The University requires that providers at a UWSOM service learning clinical sites apply for the free professional liability coverage through the <Link color="secondary" herf="https://www.wahealthcareaccessalliance.org/volunteers">Volunteer and Retired Provider (VRP) program</Link>.  The VRP program offers coverage for non-invasive primary and specialty care of low-income patients in qualified settings. The form is quite simple and approval takes 1-2 weeks.  To apply online click <Link color="secondary" href="https://www.wahealthcareaccessalliance.org/volunteers/apply-for-vrp#Malpractice">here</Link>.</Typography>
            <Typography className={classes.text}>Individual projects may have additional requirements.  See project specific pages for details.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="white">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ProviderRequirements);
