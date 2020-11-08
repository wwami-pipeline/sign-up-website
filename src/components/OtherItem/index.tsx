import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, CardHeader, createStyles, Link } from '@material-ui/core';
import React, { useState } from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import firebase from 'firebase';
import { RouteComponentProps } from 'react-router-dom';

const styles = createStyles({
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
    float: 'right',
  },
  dialogBody: {
    backgroundColor: '#513E6D',
  },
  indentText: {
    paddingLeft: 10,
  },
  title: {
    marginBottom: '.5em',
  },
  titleText: {
    color: '#5a2c6e',
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 14,
    marginBottom: '.5em',
  },
  textItem: {
    fontFamily: 'Lato',
    marginBottom: 8,
    fontSize: 16,
  },
  textCaps: {
    fontFamily: 'Lato',
    textTransform: 'uppercase',
  },
});

interface OtherItemModalProps extends RouteComponentProps<RouterProps> {
  classes: any; // CSS-in-JS styling
  fullScreen: boolean;
  project: any;
  signedIn: boolean;
}

const OtherItemModal: React.FC<OtherItemModalProps> = (props) => {
  const { classes, fullScreen, project, signedIn } = props;

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [signUpLinks, setSignUpLinks] = useState<string[]>(props.project['Sign-up Link'].split(','));
  const [order, setOrder] = useState<string[] | null>(null);

  const getOrderNumber = (x) => {
    if (order) {
      let index = order.indexOf(x);
      return index === -1 ? 1000 : index;
    }

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

  const signUpButtons = (
    <div>
      {signUpLinks.length === 1 ? (
        <Button
          size="large"
          color="secondary"
          variant="contained"
          className={classes.button}
          target="_blank"
          href={signUpLinks[0]}
        >
          Sign Up
        </Button>
      ) : (
          signUpLinks.map((link, index) => (
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
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        fullWidth={!fullScreen}
        fullScreen={fullScreen}
        maxWidth="lg"
      >
        <div className={classes.dialogBody}>
          <DialogTitle>
            <Typography variant="h4"> {project['Title']} </Typography>
            <Button
              className={classes.closeButton}
              onClick={() => setModalOpen(false)}
            >
              Close
            </Button>
            {signUpLinks.length > 0 ? (
              signedIn ? (
                signUpButtons
              ) : (
                  <Typography style={{ fontSize: 18, marginTop: '1em' }}>
                    <Link
                      style={{
                        cursor: 'pointer',
                        color: 'pink',
                      }}
                      onClick={() => {
                        var provider = new firebase.auth.OAuthProvider(
                          'microsoft.com'
                        );
                        provider.setCustomParameters({
                          // Target specific email with login hint.
                          login_hint: 'netid@uw.edu',
                        });
                        firebase.auth().signInWithPopup(provider);
                      }}
                    >
                      Sign In
                  </Link>{' '}
                  with your UW Net ID to see sign up links
                  </Typography>
                )
            ) : (
                <div />
              )}
          </DialogTitle>
          <DialogContent>
            {Object.keys(project)
              .sort((x, y) => {
                return getOrderNumber(x) - getOrderNumber(y);
              })
              .map((key) => {
                if (
                  key.toLowerCase() !== 'title' &&
                  key !== 'Sign-up Link' &&
                  key !== 'Dates' &&
                  key !== 'Order'
                )
                  return (
                    <Typography
                      key={key}
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
                return <div key="0" />;
              })}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setModalOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
      <Card
        className={classes.card}
        onClick={() => setModalOpen(true)}
      >
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
            <b>Contact: </b>{' '}
            {typeof project['Contact'] === 'string'
              ? project['Contact'] === ''
                ? 'TBD'
                : project['Contact']
              : 'TBD'}
          </Typography>
          <Typography className={classes.text} align="left" component="p">
            <b>Description: </b>
            {/* Show description up to certain point */}
            {typeof project['Project Description'] === 'string'
              ? project['Project Description'].length > 250
                ? project['Project Description'].substring(0, 250) + '...'
                : project['Project Description']
              : ''}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

//@ts-ignore
export default withMobileDialog()(withStyles(styles)(OtherItemModal));
