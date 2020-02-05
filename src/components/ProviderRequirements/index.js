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
          <div className={classes.dialogBorder} />
          <DialogTitle className={classes.dialogBody}>
            <Typography variant="h4" className={classes.textCaps}>
              Providers
            </Typography>
          </DialogTitle>
          <div className={classes.dialogBody}>
            <DialogContent className={this.props.dialogContent}>
              <Typography className={classes.text}>
                <b>All Providers: </b> Fill out a brief survey{' '}
                <Link
                  color="secondary"
                  href="https://catalyst.uw.edu/webq/survey/clarkel/343031"
                >
                  here
                </Link>
                .
              </Typography>
              <Typography className={classes.text}>
                <b>
                  <u>MD Providers</u>
                </b>
              </Typography>
              <Typography className={classes.text}>
                UW employees (full-time or part-time) in the Departments of
                Internal Medicine, Family Medicine, Emergency Medicine,
                Neurology, and Pediatrics, NO additional approval is required.
                If you are interested in volunteering at any of our service
                learning activities, please sign up on this website!
              </Typography>
              <Typography className={classes.text}>
                UW employees (full-time or part-time) in ALL OTHER departments,
                please contact Leonora Clarke,
                <Link color="secondary" href=" mailto://clarkel@uw.edu">
                  {' '}
                  clarkel@uw.edu
                </Link>
                .
              </Typography>
              <Typography className={classes.text}>
                Non-UW employees (this includes VA and FQHC employees), please
                check with your insurance to find out if you are covered during
                service learning activities. If your coverage does not extend to
                the service learning activity, or if you are retired, liability
                coverage can be obtained through the Washington State VRP
                program (see link below).
              </Typography>
              <Typography className={classes.text}>
                <b>
                  <u>Non-MD Providers</u>
                </b>
              </Typography>
              <Typography className={classes.text}>
                The University requires that all non-MD providers at a UWSOM
                service learning clinical sites apply for the free professional
                liability coverage through the{' '}
                <Link
                  color="secondary"
                  href=" https://www.wahealthcareaccessalliance.org/volunteers"
                >
                  {' '}
                  Volunteer and Retired Provider (VRP) program{' '}
                </Link>
                . The VRP program offers coverage for non-invasive primary and
                specialty care of low-income patients in qualified settings. The
                form is quite simple and approval takes 1-2 weeks. To apply
                online click{' '}
                <Link
                  color="secondary"
                  href=" https://www.wahealthcareaccessalliance.org/volunteers/apply-for-vrp#Malpractice"
                >
                  here
                </Link>
                .
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

export default withStyles(styles)(ProviderRequirements);
