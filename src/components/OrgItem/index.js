import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { rrulestr } from 'rrule';
import { SignInButton } from '../SignInButton/SignInButton';

const styles = () => ({
  button: {
    marginTop: '1em',
  },
  card: {
    backgroundColor: '#513E6D',
    paddingBottom: 5,
    cursor: 'pointer',
  },
  cardHeader: {
    backgroundColor: '#f0f9a4',
  },
  cardMedia: {
    height: 360,
  },
  closeButton: {
    color: '#2E1159',
    float: 'right',
  },
  dialogBody: {
    backgroundColor: '#DAD9E1',
  },
  dialogBorder: {
    backgroundColor: '#513E6D',
    height: '20px',
  },
  dialogHeader: {
    color: '#2E1159',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  indentText: {
    paddingLeft: 10,
  },
  titleText: {
    color: '#5a2c6e',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 14,
    marginBottom: '.5em',
  },
  textItem: {
    color: '#2E1159',
    fontFamily: 'Lato',
    marginBottom: 8,
    fontSize: 16,
  },
  textCaps: {
    color: '#2E1159',
    fontFamily: 'Lato',
    marginBottom: 3,
    textTransform: 'uppercase',
  },
});

class OrgItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signUpLinks: [],
    };

    if (props.project['Dates']) {
      Object.keys(props.project['Dates']).forEach((key) => {
        let link = props.project['Dates'][key]['link'];
        if (link && !this.state.signUpLinks.includes(link)) {
          if (link.includes('http')) {
            this.state.signUpLinks.push(link);
          } else {
            this.state.signUpLinks.push('http://' + link);
          }
        }
      });
    }

    if (props.project['Order']) {
      this.state.order = [];
      Object.keys(props.project['Order']).forEach((key) => {
        this.state.order.push(props.project['Order'][key]);
      });
    }
  }

  getOrderNumber(x) {
    if (this.state.order) {
      let index = this.state.order.indexOf(x);
      return index === -1 ? 1000 : index;
    }

    if (x.toLowerCase().includes('occurrences')) return 2;
    if (x.toLowerCase().includes('project description')) return 3;
    if (x.toLowerCase().includes('types of volunteers needed')) return 3.5;
    if (x.toLowerCase().includes('clinic schedule')) return 4;
    if (x.toLowerCase().includes('location')) return 4.5;
    if (x.toLowerCase().includes('parking and directions')) return 5;
    if (x.toLowerCase().includes('provider information')) return 6;
    if (x.toLowerCase().includes('hs grad student information')) return 7;
    if (x.toLowerCase().includes('undergraduate information')) return 8;
    if (x.toLowerCase().includes('project specific training')) return 9;
    if (x.toLowerCase().includes('tips and reminders')) return 10;
    if (x.toLowerCase().includes('contact information and cancellation policy'))
      return 11;
    if (x.toLowerCase().includes('services provided')) return 11.5;
    if (x.toLowerCase().includes('clinic flow')) return 12;
    if (x.toLowerCase().includes('website link')) return 13;
    return 14;
  }

  render() {
    const { classes, fullScreen, project, imageUrl } = this.props;

    // Turn Dates object of RRule array into readable string as 'Occurrences' field
    if (project && project['Dates']) {
      project['Occurrences'] = '';
      Object.keys(project['Dates']).forEach((key) => {
        project['Occurrences'] +=
          '• ' +
          rrulestr(project['Dates'][key].rrule).toText() +
          ' starting at ' +
          project['Dates'][key].startTime +
          ' for ' +
          project['Dates'][key].duration +
          ' hours\n';
      });
    }

    const signUpButtons = (
      <div>
        {this.state.signUpLinks.length === 1 ? (
          <Button
            size="large"
            color="secondary"
            variant="contained"
            className={classes.button}
            target="_blank"
            href={this.state.signUpLinks[0]}
          >
            Sign Up
          </Button>
        ) : (
          this.state.signUpLinks.map((link, index) => (
            <Button
              size="large"
              color="secondary"
              variant="contained"
              className={classes.button}
              target="_blank"
              href={link}
            >
              Sign Up (Option {index + 1})
            </Button>
          ))
        )}
      </div>
    );

    return (
      <div>
        <Dialog
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          fullWidth={!fullScreen}
          fullScreen={fullScreen}
          maxWidth="lg"
        >
          <div className={classes.dialogBody}>
            <div className={classes.dialogBorder} />
            <DialogTitle>
              <Typography className={classes.dialogHeader} variant="h5">
                {' '}
                {project['Title']}{' '}
              </Typography>
              <Button
                className={classes.closeButton}
                onClick={() => this.setState({ modalOpen: false })}
                color="white"
              >
                Close
              </Button>
              {this.state.signUpLinks.length > 0 ? (
                this.props.signedIn ? (
                  signUpButtons
                ) : (
                  <div style={{ display: 'block' }}>
                    <SignInButton />
                  </div>
                )
              ) : (
                <div />
              )}
            </DialogTitle>
            <DialogContent>
              {Object.keys(project)
                .filter((x) => x !== 'Dates' && x !== 'Order')
                .sort((x, y) => {
                  return this.getOrderNumber(x) - this.getOrderNumber(y);
                })
                .map((key) => {
                  if (key.toLowerCase() !== 'title' && key !== 'Sign-up Link')
                    return (
                      <Typography
                        key={key}
                        className={classes.textItem}
                        gutterBottom
                        align="left"
                        component="p"
                      >
                        <Typography variant="h6" className={classes.textCaps}>
                          <u>{key}</u>
                        </Typography>
                        {project[key].split('\n').map((item, i) => {
                          return (
                            <p className={classes.indentText} key={i}>
                              {item}
                            </p>
                          );
                        })}
                      </Typography>
                    );
                  return <div key="0" />;
                })}
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.setState({ modalOpen: false })}
                color="white"
              >
                Close
              </Button>
            </DialogActions>
          </div>

          <div className={classes.dialogBorder} />
        </Dialog>
        <Card
          className={classes.card}
          onClick={() => this.setState({ modalOpen: true })}
        >
          <CardMedia
            className={classes.cardMedia}
            image={imageUrl}
            title={project['Title']}
          />
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography className={classes.titleText} variant="h6">
                {' '}
                {project['Title']}{' '}
              </Typography>
            }
          ></CardHeader>
          <CardContent>
            {project['Location'] ? (
              <Typography
                className={classes.text}
                gutterBottom
                align="left"
                component="p"
              >
                <b>Location: </b> {project['Location']}
              </Typography>
            ) : (
              <div />
            )}
            {project['Project Description'] ? (
              <Typography className={classes.text} align="left" component="p">
                <b>Description: </b>{' '}
                {project['Project Description'].length > 200
                  ? project['Project Description'].substring(0, 200) + '...'
                  : project['Project Description']}
              </Typography>
            ) : (
              <div />
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(OrgItemModal));
