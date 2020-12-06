import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, createStyles, withMobileDialog, Typography, withStyles, DialogTitle, DialogContent, DialogActions, Dialog, Button } from '@material-ui/core';
import { rrulestr } from 'rrule';
import { SignInButton } from '../SignInButton/SignInButton';

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

interface OrgItemModalProps {
  project: any;
  fullScreen: boolean;
  imageUrl: string;
  classes: any;
  signedIn: boolean;
}

const OrgItemModal: React.FC<OrgItemModalProps> = (props) => {
  const { classes, fullScreen, project, imageUrl, signedIn } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [signUpLinks, setSignUpLinks] = useState<string[]>([]);
  const [order, setOrder] = useState<string[]>([]);

  useEffect(() => {
    if (props.project['Dates']) {
      setSignUpLinks([]);
      Object.keys(props.project['Dates']).forEach((key) => {
        let link = props.project['Dates'][key]['link'];
        if (link && !signUpLinks.includes(link)) {
          if (link.includes('http')) {
            signUpLinks.push(link);
          } else {
            signUpLinks.push('http://' + link);
          }
        }
      });
    }
    if (props.project['Order']) {
      setOrder([]);
      Object.keys(props.project['Order']).forEach((key) => {
        order.push(props.project['Order'][key]);
      });
    }
  }, [window.location]);

  const getOrderNumber = (x: string) => {
    if (order) {
      let index = order.indexOf(x);
      return index === -1 ? 1000 : index;
    }
    // If no ordering in database, use defaults
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
          <div className={classes.dialogBorder} />
          <DialogTitle>
            <Typography className={classes.dialogHeader} variant="h5">
              {' '}
              {project['Title']}{' '}
            </Typography>
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
                return getOrderNumber(x) - getOrderNumber(y);
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
              onClick={() => setModalOpen(false)}
            >
              Close
            </Button>
          </DialogActions>
        </div>

        <div className={classes.dialogBorder} />
      </Dialog>
      <Card
        className={classes.card}
        onClick={() => setModalOpen(true)}
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

//@ts-ignore
export default withMobileDialog()(withStyles(styles)(OrgItemModal));
