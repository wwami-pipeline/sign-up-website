import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia
} from '@material-ui/core';
import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = () => ({
  button: {
    marginTop: '1em'
  },
  card: {
    paddingBottom: 5
  },
  cardContent: {
    //height: 120
  },
  cardHeader: {
    backgroundColor: '#f0f9a4'
  },
  cardMedia: {
    height: 240
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
    if (x.toLowerCase() === 'project description') return 3;
    if (x.toLowerCase() === 'volunteer openings') return 3;
    if (x.toLowerCase() === 'clinic schedule') return 4;
    if (x.toLowerCase() === 'parking and directions') return 5;
    if (x.toLowerCase() === 'volunteer provider') return 6;
    if (x.toLowerCase() === 'student volunteer onboarding process') return 7;
    if (x.toLowerCase() === 'undergraduate specific volunteer information')
      return 8;
    if (x.toLowerCase() === 'project specific training') return 9;
    if (x.toLowerCase() === 'tips and reminders') return 10;
    if (x.toLowerCase() === 'contact and cancellation policy') return 11;
    if (x.toLowerCase() === 'clinic flow') return 12;
    if (x.toLowerCase() === 'website link') return 13;
    return 14;
  }

  render() {
    const { fullScreen, classes, project, title } = this.props;
    console.log('images/' + title + '/' + project['Title'] + '.jpg');
    return (
      <div>
        <Dialog
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          fullWidth={!fullScreen}
          fullScreen={fullScreen}
          maxWidth="lg"
        >
          <DialogTitle>
            <Typography variant="h4">{project['Title']}</Typography>
            {this.state.signUpLinks.length === 1 ? (
              <Button
                size="large"
                color="secondary"
                variant="contained"
                className={classes.button}
                target='_blank'
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
                  target='_blank'
                  href={link}
                >
                  Sign Up (Option {index + 1})
                </Button>
              ))
            )}
          </DialogTitle>
          <DialogContent className={this.props.dialogContent}>
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
                      <h3>
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
        </Dialog>
        <Card className={classes.card}>
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
          <CardContent className={classes.cardContent}>
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
          <CardActions>
            <Button
              className={classes.text}
              size="medium"
              color="secondary"
              variant="contained"
              onClick={() => this.setState({ modalOpen: true })}
            >
              View
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(OrgItemModal));
