import React from 'react';
import {
  Grid,
  Link,
  Typography,
  withStyles
} from '@material-ui/core';
import LinkBox from '../LinkBox/index';

const styles = () => {
  return {
    gridContainer: {
      marginTop: '1.5em',
      marginBottom: '1em',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    linkBoxContainer: {
      mariginLeft: 'auto',
      marginRight: 'auto'
    },
    otherProjectsDiv: {
      backgroundColor: '#F4EFA8',
      height: 473,
      minWidth: 280,
      border: '1px solid red',
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    otherProjectsLink: {
      textDecoration: 'none'
    },
    otherProjectsText: {
      color: '#2E1159',
      marginLeft: '50px',
      marginRight: '50px',
      fontFamily: 'Lato',
      textAlign: 'center',
    }
  };
};

const SeattleGrid = props => {
  const { classes, overviews } = props;

  return ( 
    <div className={classes.gridContainer}>
      <Grid container spacing={24}>
        <Grid item xs>
          <div
            className={classes.linkBoxContainer}
            onClick={() => {
              this.props.history.push('/SHIFA');
            }}
          >
            <LinkBox
              title="SHIFA"
              name="STUDENT HEALTH INITIATIVE FOR ACCESS"
              description={overviews.SHIFA.description}
              imageLocation="images/SHIFA/SHIFA.jpg"
              path="/SHIFA"
            />
          </div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.linkBoxContainer}
            onClick={() => {
              this.props.history.push('/CHAP');
            }}
          >
            <LinkBox
              title="CHAP"
              name="COMMUNITY HEALTH ADVANCEMENT PROGRAM"
              description={overviews.CHAP.description}
              imageLocation="images/CHAP/CHAP.jpg"
              path="/CHAP"
            />
          </div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.linkBoxContainer}
            onClick={() => {
              this.props.history.push('/UDSM');
            }}
          >
            <LinkBox
              title="UDSM"
              name="UNIVERSITY DISTRICT STREET MEDICINE"
              description={overviews.UDSM.description}
              imageLocation="images/UDSM/UDSM.jpg"
              path="/UDSM"
            />
          </div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.linkBoxContainer}
            onClick={() => {
              this.props.history.push('/DFAD');
            }}
          >
            <LinkBox
              title="Doc for a Day"
              name="DFAD"
              description={overviews.DFAD.description}
              imageLocation="images/DFAD/DFAD.jpg"
              path="/DFAD"
            />
          </div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.linkBoxContainer}
            onClick={() => {
              this.props.history.push('/UMOV');
            }}
          >
            <LinkBox
              title="Mobile Health Outreach Van"
              name=""
              description={overviews.UMOV.description}
              imageLocation="images/UMOV/UMOV.jpg"
              path="/UMOV"
            />
          </div>
        </Grid>
        <Grid item xs>
          <div
            className={classes.linkBoxContainer}
            onClick={() => {
              this.props.history.push('/UTEST');
            }}
          >
            <LinkBox
              title="UTest"
              name="Rapid HIV Testing"
              description={overviews.UTEST.description}
              imageLocation="images/UTEST/UTEST.jpg"
              path="/UTEST"
            />
          </div>
        </Grid>
        <Grid item xs>
          <Link to={{pathname: 'Others'}} className={classes.otherProjectsLink}>
            <div className={classes.otherProjectsDiv}
            onClick={() => { this.props.history.push('/Others') }}>
              <Typography variant='h4' className={classes.otherProjectsText}>
                  All other UWSOM Service Learning Projects
              </Typography>      
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SeattleGrid);