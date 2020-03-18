import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Grid,
  Button
} from '@material-ui/core';
import NavBar from '../NavBar';
import OrgItem from '../OrgItem';
import OtherItem from '../OtherItem'

const styles = () => ({
  page: {
    overflow: 'hidden'
  },
  description: {
    fontFamily: 'Lato',
    marginBottom: '1em'
  },
  title: {
    fontFamily: 'Lato',
    letterSpacing: '10px',
    marginBottom: '1em'
  },
  directionTitleTop: {
    marginTop: '2em',
    textAlign: 'center'
  },
  paperContainer: {
    padding: '2em',
    margin: '1.5em',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  fabButton: {
    marginRight: '1em',
    marginTop: '1em'
  },
  directionTitleBottom: {
    textAlign: 'center'
  },
  selectionContainer: {
    maxWidth: 950,
    margin: '15px auto 0 auto',
    textAlign: 'center',
    padding: '2em',
    paddingBottom: '5em'
  },
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
  videoButton: {
    backgroundColor: '#f0f9a4',
    color: 'black'
  }
});

class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { classes, path, projects, overview, title } = this.props;
    const gridItems = projects
      ? Object.keys(projects).map((project, index) => {
          return (
            <Grid item key={index} xs={12} md={6}>
              {title === 'Others' ? (
                <OtherItem project={projects[project]} path={path} />
              ) : (
                <OrgItem project={projects[project]} path={path} />
              )}
            </Grid>
          );
        })
      : React.createElement('div');
    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <NavBar />
        </AppBar>
        <div className={classes.selectionContainer}>
          <div className={classes.directionTitleBottom}>
            <Typography className={classes.title} gutterBottom variant="h4">
              {title}
            </Typography>
            <Typography
              className={classes.description}
              gutterBottom
              variant="h6"
            >
              {overview.description}
            </Typography>
            {overview.video ? (
              <Button
                onClick={() => window.open(overview.video)}
                className={classes.videoButton}
                variant="contained"
              >
                {title} Information Video
              </Button>
            ) : (
              <div />
            )}
            <Grid
              container
              spacing={24}
              alignContent="center"
              className={classes.gridContainer}
            >
              {gridItems}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OrgPage);
