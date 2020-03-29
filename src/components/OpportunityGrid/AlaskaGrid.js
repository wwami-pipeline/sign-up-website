import React from 'react';
import {
  Grid,
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

class AlaskaGrid extends React.Component {
  render() {
    const { classes, images, overviews } = this.props;
    return ( 
      <div className={classes.gridContainer}>
        <Grid container spacing={24}>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Alaska/BFFC');
              }}
            >
              <LinkBox
                title="BFFC"
                name="Brother Francis Foot Care"
                // description={overviews.BFFC.description}
                imageLocation={images['BFFC.jpg']}
                path="/org/Alaska/BFFC"
              />
            </div>
          </Grid>
          <Grid item xs>
            <div
              className={classes.linkBoxContainer}
              onClick={() => {
                this.props.history.push('/Alaska/PHC');
              }}
            >
              <LinkBox
                title="PHC"
                name="Project Homeless Connect"
                // description={overviews.BFFC.description}
                imageLocation={images['PHC.jpg']}
                path="/org/Alaska/PHC"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AlaskaGrid);