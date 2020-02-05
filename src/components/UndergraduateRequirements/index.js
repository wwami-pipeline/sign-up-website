import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';

const styles = () => ({
  dialogBody: {
    backgroundColor: '#B1A6C1'
  },
  dialogBorder: {
    backgroundColor: '#513E6D',
    height: '20px'
  },
  title: {
    marginBottom: '.5em'
  },
  text: {
    color: 'black',
    fontFamily: 'Lato',
    marginBottom: '1em'
  },
  textCaps: {
    fontFamily: 'Lato',
    textTransform: 'uppercase'
  }
});

class UndergraduateRequirements extends React.Component {
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
          <div className={classes.dialogBorder} />
          <DialogTitle className={classes.dialogBody}>
            <Typography variant="h4" className={classes.textCaps}>
              Undergraduates
            </Typography>
          </DialogTitle>
          <div className={classes.dialogBody}>
            <DialogContent className={this.props.dialogContent}>
              <Typography className={classes.text}>
                Undergraduate students are required to complete an online HIPAA
                certification training. Contact Leonora Clarke (
                <Link href="mailto://clarkel@uw.edu" color="secondary">
                  clarkel@uw.edu
                </Link>
                ) for details. Participation in our programming is limited to UW
                students only.
              </Typography>
              <Typography className={classes.text}>
                Individual projects may have additional requirements. See
                project specific pages for details.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="white">
                Close
              </Button>
            </DialogActions>
          </div>
          <div className={classes.dialogBorder} />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(UndergraduateRequirements);
