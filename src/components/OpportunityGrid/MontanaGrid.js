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

class MontanaGrid extends React.Component {
  render() {
    const { classes, overviews } = this.props;
    return ( 
      <div className={classes.gridContainer}>
        <Grid container spacing={24}>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Montana/AIDS');
              }}
            >
              <LinkBox
                title="AIDS Outreach"
                name="AIDS Outreach"
                // description={overviews.AIDS_Outreach.description}
                imageLocation="images/Montana/AIDS Outreach/AIDS Outreach.jpg"
                path="/Montana/AIDS Outreach"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Montana/MMH');
              }}
            >
              <LinkBox
                title="MMH"
                name="Montana Mental Health"
                // description={overviews.MMH.description}
                imageLocation="images/Montana/MMH/MMH.jpg"
                path="/Montana/MMH"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MontanaGrid);