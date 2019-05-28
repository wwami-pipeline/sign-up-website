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

class MedicalStudentRequirements extends React.Component {
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
          <DialogTitle><Typography variant="h4">Medical Student Requirements</Typography></DialogTitle>
          <DialogContent className={this.props.dialogContent}>
            <Typography className={classes.title} variant="h5">All Projects</Typography>
            <Typography className={classes.text}>All medical students are required to attend a fingerstick training prior to working at any of our sites.</Typography>
            <Typography className={classes.title} variant="h5">Project Specific</Typography>
            <Typography className={classes.text}>University District Street Medicine (UDSM) - all medical students must complete an <Link color="secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSfJ4khjNkzWZoR9jSKnLcTTihSSvaiKPNlXb8CQxa0Xvgodbg/viewform">online application form</Link> are required to view a short training video prior to volunteering with UDSM.</Typography>
            <Typography className={classes.text}>CHAP - all medical students are required to attend a CHAP training prior to  volunteering with CHAP, and review <Link color="secondary" href="https://depts.washington.edu/fammed/wp-content/uploads/2019/01/Steps-to-Foot-Care.pdf">Steps to Footcare</Link> and <Link color="secondary" href="https://depts.washington.edu/fammed/wp-content/uploads/2019/01/Foot-care-for-diabetes.pdf">Footcare for Diabetes.</Link></Typography>
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

export default withStyles(styles)(MedicalStudentRequirements);
