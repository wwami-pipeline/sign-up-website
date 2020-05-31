import React from 'react';
import { Grid, Link, Typography, withStyles } from '@material-ui/core';
import LinkBox from '../LinkBox/index';

const styles = () => {
  return {
    gridContainer: {
      marginTop: '1.5em',
      marginBottom: '1em',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    linkBoxContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    otherProjectsDiv: {
      backgroundColor: '#F4EFA8',
      borderRadius: '4px',
      display: 'table-cell',
      height: 450,
      minWidth: 280,
      verticalAlign: 'middle',
    },
    otherProjectsLink: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
    otherProjectsText: {
      color: '#2E1159',
      marginLeft: '50px',
      marginRight: '50px',
      fontFamily: 'Lato',
      textAlign: 'center',
    },
  };
};

const names = {
  SHIFA: 'STUDENT HEALTH INITIATIVE FOR ACCESS',
  CHAP: 'COMMUNITY HEALTH ADVANCEMENT PROGRAM',
  UDSM: 'UNIVERSITY DISTRICT STREET MEDICINE',
  UTEST: 'RAPID HIV TESTING',
  DFAD: 'DOCTOR FOR A DAY',
  UMOV: 'MOBILE HEALTH OUTREACH VAN',
};

class OpportunityGrid extends React.Component {
  render() {
    const {
      classes,
      images,
      locationData,
      locationName,
    } = this.props;
    return (
      <div className={classes.gridContainer}>
        <Grid container spacing={24}>
          {/* DISPLAY EACH ORGANIZATION */}
          {Object.keys(locationData[locationName])
            .filter((x) => x !== 'Others')
            .map((org) => (
              <Grid item xs={12} md={6}>
                <div
                  className={classes.linkBoxContainer}
                  onClick={() => {
                    this.props.history.push('/org/' + locationName + '/' + org);
                  }}
                >
                  <LinkBox
                    title={org}
                    name={names[org] ? names[org] : ''}
                    imageLocation={images[org + '.jpg']}
                    path={'/org/' + locationName + '/' + org}
                  />
                </div>
              </Grid>
            ))}
          {/* DISPLAY OTHERS BOX */}
          {locationData[locationName].Others ? (
            <Grid item xs>
              <Link
                to={{ pathname: '/org/' + locationName + '/Others' }}
                className={classes.otherProjectsLink}
              >
                <div
                  className={classes.otherProjectsDiv}
                  onClick={() => {
                    this.props.history.push('/org/' + locationName + '/Others');
                  }}
                >
                  <Typography
                    variant="h4"
                    className={classes.otherProjectsText}
                  >
                    All other {locationName} UWSOM Service Learning Projects
                  </Typography>
                </div>
              </Link>
            </Grid>
          ) : ( <div /> )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(OpportunityGrid);
