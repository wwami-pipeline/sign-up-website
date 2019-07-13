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

class OtherGraduateRequirements extends React.Component {
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
          <DialogTitle><Typography variant="h4">Graduate Health Science Students</Typography></DialogTitle>
          <DialogContent className={this.props.dialogContent}>
            <Typography className={classes.text}>All graduate health sciences students are required to attend a fingerstick training prior to performing any blood glucose tests.</Typography>
            <Typography className={classes.text}>ndividual projects may have additional requirements.  See project specific pages for details.</Typography>
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

export default withStyles(styles)(OtherGraduateRequirements);
