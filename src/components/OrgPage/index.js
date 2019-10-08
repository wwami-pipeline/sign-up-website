import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Grid
} from '@material-ui/core';
import NavBar from '../NavBar';
import OrgItem from '../OrgItem';

const styles = () => ({
  page: {
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'Lato',
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
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: '2em',
    paddingBottom: '5em',
    margin: '1em'
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
    const { classes, projects, description, title } = this.props;
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
            <Typography className={classes.title} gutterBottom variant="h6">
              {description}
            </Typography>
            <Grid container spacing={24}>
              {projects.map(project => {
                return (
                  <Grid item xs={12} md={6}>
                    <OrgItem project={project} title={title} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OrgPage);
