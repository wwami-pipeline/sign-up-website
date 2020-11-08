import React from 'react';
import { createStyles, Grid, Link, Typography, withStyles } from '@material-ui/core';
import LinkBox from '../LinkBox/index';

const names = {
  SHIFA: 'STUDENT HEALTH INITIATIVE FOR ACCESS',
  CHAP: 'COMMUNITY HEALTH ADVANCEMENT PROGRAM',
  UDSM: 'UNIVERSITY DISTRICT STREET MEDICINE',
  UTEST: 'RAPID HIV TESTING',
  DFAD: 'DOCTOR FOR A DAY',
  UMOV: 'MOBILE HEALTH OUTREACH VAN',
};

interface OpportunityGridProps {
  classes?: any; // CSS-in-JS styling
  history: any;
  images: any;
  locationData: any;
  locationName: any;
}

const OpportunityGrid: React.FC<OpportunityGridProps> = (props) => {
  const { classes, images, locationData, locationName } = props;

  console.log("IMAGES: " + JSON.stringify(images))

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
                  props.history.push('/org/' + locationName + '/' + org);
                }}
              >
                <LinkBox
                  title={org}
                  name={names[org] ? names[org] : ''}
                  imageLocation={images ? images[org + '.jpg'] : ""}
                  path={'/org/' + locationName + '/' + org}
                />
              </div>
            </Grid>
          ))}
        {/* DISPLAY OTHERS BOX */}
        {locationData[locationName].Others ? (
          <Grid item xs>
            <Link
              href={'/org/' + locationName + '/Others'}
              className={classes.otherProjectsLink}
            >
              <div
                className={classes.otherProjectsDiv}
                onClick={() => {
                  props.history.push('/org/' + locationName + '/Others');
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
        ) : (<div />)}
      </Grid>
    </div>
  );
}

const styles = createStyles({
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
});

export default withStyles(styles)(OpportunityGrid);
