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
              this.props.history.push('/BFFC');
            }}
          >
            <LinkBox
              title="SHIFA"
              name="Brother Francis Foot Care"
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
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SeattleGrid);