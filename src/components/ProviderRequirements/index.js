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
          <DialogTitle><Typography variant="h4">Provider Requirements</Typography></DialogTitle>
          <DialogContent className={this.props.dialogContent}>
            <Typography className={classes.title} variant="h5">All Projects</Typography>
            <Typography className={classes.text}>All providers are required to apply for the Washington state sponsored Volunteer and Retired Provider (VRP) Program.  This program offers free liability coverage for volunteer providers at all of our clinical projects.  To apply online click <Link color="secondary" href="https://www.wahealthcareaccessalliance.org/volunteers/apply-for-vrp">here</Link>.</Typography>
            <Typography className={classes.title} variant="h5">Project Specific</Typography>
            <Typography className={classes.text}>University District Street Medicine (UDSM) - all supervising providers are required to view a short training video prior to volunteering with UDSM.</Typography>
            <Typography className={classes.text}>CHAP - all supervising providers are required to review <Link color="secondary" href="https://depts.washington.edu/fammed/wp-content/uploads/2019/01/Foot-Care-and-Foot-Exam.pptx">CHAP footcare slides</Link>.  It is also recommended that new volunteers shadow an experienced provider at a CHAP clinic.</Typography>
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
