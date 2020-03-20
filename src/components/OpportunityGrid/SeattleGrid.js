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
      cursor: 'pointer',
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

class SeattleGrid extends React.Component {
  render() {
    const { classes, overviews } = this.props;
    return ( 
      <div className={classes.gridContainer}>
        <Grid container spacing={24}>
          <Grid item xs>
            <div className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Seattle/SHIFA');
              }}
            >
                <LinkBox
                  title="SHIFA"
                  name="STUDENT HEALTH INITIATIVE FOR ACCESS"
                  description={overviews.SHIFA.Description}
                  imageLocation="images/Seattle/SHIFA/SHIFA.jpg"
                  path="Seattle/SHIFA"
                />              
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Seattle/CHAP');
              }}
            >
              <LinkBox
                title="CHAP"
                name="COMMUNITY HEALTH ADVANCEMENT PROGRAM"
                description={overviews.CHAP.Description}
                imageLocation="images/Seattle/CHAP/CHAP.jpg"
                path="Seattle/CHAP"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Seattle/UDSM');
              }}
            >
              <LinkBox
                title="UDSM"
                name="UNIVERSITY DISTRICT STREET MEDICINE"
                description={overviews.UDSM.Description}
                imageLocation="images/Seattle/UDSM/UDSM.jpg"
                path="Seattle/UDSM"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Seattle/DFAD');
              }}
            >
              <LinkBox
                title="Doc for a Day"
                name="DFAD"
                description={overviews.DFAD.Description}
                imageLocation="images/Seattle/DFAD/DFAD.jpg"
                path="Seattle/DFAD"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Seattle/UMOV');
              }}
            >
              <LinkBox
                title="Mobile Health Outreach Van"
                name=""
                description={overviews.UMOV.Description}
                imageLocation="images/Seattle/UMOV/UMOV.jpg"
                path="Seattle/UMOV"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Seattle/UTEST');
              }}
            >
              <LinkBox
                title="UTest"
                name="Rapid HIV Testing"
                description={overviews.UTEST.Description}
                imageLocation="images/Seattle/UTEST/UTEST.jpg"
                path="Seattle/UTEST"
              />
            </div>
          </Grid>
          <Grid item xs>
            <Link to={{pathname: 'Seattle/Others'}} className={classes.otherProjectsLink}>
              <div className={classes.otherProjectsDiv}
              onClick={() => { this.props.history.push('/Seattle/Others') }}>
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
}

export default withStyles(styles)(SeattleGrid);