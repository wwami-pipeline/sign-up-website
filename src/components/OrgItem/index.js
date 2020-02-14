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

const styles = () => ({
  button: {
    marginTop: '1em'
  },
  card: {
    backgroundColor: '#513E6D',
    paddingBottom: 5,
    cursor: 'pointer'
  },
  cardHeader: {
    backgroundColor: '#f0f9a4'
  },
  cardMedia: {
    height: 360
  },
  closeButton: {
    float: 'right'
  },
  dialogBody: {
    backgroundColor: '#513E6D'
  },
  indentText: {
    paddingLeft: 10
  },
  title: {
    marginBottom: '.5em'
  },
  titleText: {
    color: '#5a2c6e'
  },
  text: {
    fontFamily: 'Lato',
    marginBottom: '.5em'
  },
  textItem: {
    fontFamily: 'Lato',
    marginBottom: 8
  },
  textCaps: {
    fontFamily: 'Lato',
    textTransform: 'uppercase'
  }
});

class OrgItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signUpLinks: props.project['Sign-up Link'].split(',')
    };
  }

  getOrderNumber(x) {
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
    const { fullScreen, classes, project, title } = this.props;
    console.log('/images/' + title + '/' + project['Title'] + '.jpg')
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
            <DialogTitle>
              <Typography variant="h4"> {project['Title']} </Typography>
              <Button
                className={classes.closeButton}
                onClick={() => this.setState({ modalOpen: false })}
                color="white"
              >
                Close
              </Button>
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
            </DialogTitle>
            <DialogContent>
              {Object.keys(project)
                .sort((x, y) => {
                  return this.getOrderNumber(x) - this.getOrderNumber(y);
                })
                .map(key => {
                  if (key.toLowerCase() !== 'title' && key !== 'Sign-up Link')
                    return (
                      <Typography
                        className={classes.textItem}
                        gutterBottom
                        align="left"
                        component="p"
                      >
                        <h3 className={classes.textCaps}>
                          <u>{key}</u>
                        </h3>
                        {project[key].split('\n').map((item, i) => {
                          return (
                            <p className={classes.indentText} key={i}>
                              {item}
                            </p>
                          );
                        })}
                      </Typography>
                    );
                  return <div />;
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
        </Dialog>
        <Card
          className={classes.card}
          onClick={() => this.setState({ modalOpen: true })}
        >
          <CardMedia
            className={classes.cardMedia}
            image={'/images/' + title + '/' + project['Title'] + '.jpg'}
            title={project['Title']}
          />
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography className={classes.titleText} variant="h5">
                {' '}
                {project['Title']}{' '}
              </Typography>
            }
          ></CardHeader>
          <CardContent>
            <Typography
              className={classes.text}
              gutterBottom
              align="left"
              component="p"
            >
              <b>Location: </b> {project['Location']}
            </Typography>
            <Typography className={classes.text} align="left" component="p">
              <b>Description: </b> {project['Project Description']}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(OrgItemModal));
