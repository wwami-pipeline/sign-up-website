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

class SpokaneGrid extends React.Component {
  render() {
    const { classes, overviews } = this.props;
    return ( 
      <div className={classes.gridContainer}>
        <Grid container spacing={24}>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Spokane/ACES');
              }}
            >
              <LinkBox
                title="ACES"
                name="ACES"
                // description={overviews.BFFC.description}
                imageLocation="images/Spokane/ACES/ACES.jpg"
                path="/Spokane/ACES"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Spokane/HOiPE');
              }}
            >
              <LinkBox
                title="HOiPE"
                name="HOiPE"
                // description={overviews.BFFC.description}
                imageLocation="images/Spokane/HOiPE/HOiPE.jpg"
                path="/Spokane/HOiPE"
              />
            </div>
          </Grid> <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Spokane/MFD');
              }}
            >
              <LinkBox
                title="MFD"
                name="Med For Ed"
                // description={overviews.BFFC.description}
                imageLocation="images/Spokane/MFD/MFD.jpg"
                path="/Spokane/MFD"
              />
            </div>
          </Grid> <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Spokane/Navigators');
              }}
            >
              <LinkBox
                title="Navigators"
                name="Refugee Navigators"
                // description={overviews.BFFC.description}
                imageLocation="images/Spokane/Navigators/Navigators.jpg"
                path="/Spokane/Navigators"
              />
            </div>
          </Grid> <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Spokane/SHEC');
              }}
            >
              <LinkBox
                title="SHEC"
                name="Spokane Health Equity Circle"
                // description={overviews.BFFC.description}
                imageLocation="images/Spokane/SHEC/SHEC.jpg"
                path="/Spokane/SHEC"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SpokaneGrid);