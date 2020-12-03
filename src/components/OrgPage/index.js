import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Grid,
  Button,
} from '@material-ui/core';
import NavBar from '../NavBar';
import OrgItem from '../OrgItem';
import OtherItem from '../OtherItem';
import BottomBanner from '../../components/BottomBanner';

const styles = () => ({
  page: {
    overflow: 'hidden',
  },
  description: {
    fontFamily: 'Lato',
    marginBottom: '1em',
  },
  title: {
    fontFamily: 'Lato',
    letterSpacing: '10px',
    marginBottom: '1em',
  },
  directionTitleTop: {
    marginTop: '2em',
    textAlign: 'center',
  },
  paperContainer: {
    padding: '2em',
    margin: '1.5em',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fabButton: {
    marginRight: '1em',
    marginTop: '1em',
  },
  directionTitleBottom: {
    textAlign: 'center',
  },
  selectionContainer: {
    maxWidth: 950,
    margin: '15px auto 0 auto',
    textAlign: 'center',
    padding: '2em',
    paddingBottom: '5em',
  },
  gridContainer: {
    marginTop: '1.5em',
    marginBottom: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linkBoxContainer: {
    mariginLeft: 'auto',
    marginRight: 'auto',
  },
  videoButton: {
    backgroundColor: '#f0f9a4',
    color: 'black',
  },
});

class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItem: window.location.pathname.split('/')[4],
      modalOpen: false,
    };
    this.updateState();
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  updateState = (location, org) => {
    if (
      this.props['images'][location] !== undefined &&
      this.props['locations'][location] !== undefined
    ) {
      this.setState({
        images: this.props['images'][location][org],
        overview: this.props['overviews'][org],
        title: org,
        path: window.location.pathname,
        projects: this.props['locations'][location][org],
      });
    }
  };

  render() {
    if (this.state.path !== window.location.pathname) {
      const splitUrl = window.location.pathname.split('/');
      this.updateState(
        decodeURIComponent(splitUrl[2]),
        decodeURIComponent(splitUrl[3])
      );
      return <div />;
    }

    const { classes, signedIn, overviews } = this.props;
    const { path, projects, images, title } = this.state;

    const overview = overviews ? overviews[title] : undefined;

    if (path !== this.state.currPath) {
      this.setState({ currPath: path });
    }

    // Divide projects by their category field, if present
    let categories = {};
    categories[''] = [];
    if (projects) {
      Object.keys(projects).forEach((projectKey) => {
        const project = projects[projectKey];
        if (project.Category) {
          const kvp = categories[project.Category];
          if (kvp) {
            kvp.push(project);
          } else {
            const arr = [project];
            categories[project.Category] = arr;
          }
        } else {
          const emptyCategory = categories[''];
          emptyCategory.push(project);
        }
      });
    }
    const grids = Object.keys(categories).map((category) => (
      <div>
        {category !== '' ? (
          <Typography variant="h5">{category}</Typography>
        ) : (
          <div />
        )}
        <Grid
          container
          spacing={24}
          alignContent="center"
          className={classes.gridContainer}
        >
          {Object.keys(categories[category]).map((project, index) => (
            <Grid item xs={12} sm={6} md={4}>
              {title === 'Others' ? (
                <OtherItem
                  signedIn={signedIn}
                  project={categories[category][project]}
                  path={path}
                />
              ) : (
                <OrgItem
                  openedItem={
                    categories[category][project]['Title'] ===
                    this.state.openedItem
                  }
                  signedIn={signedIn}
                  project={categories[category][project]}
                  imageUrl={images[categories[category][project]['Title']]}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    ));
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

            {overview ? (
              <div>
                <Typography
                  className={classes.description}
                  gutterBottom
                  variant="h6"
                >
                  {overview.Description}
                </Typography>
                {overview.Video ? (
                  <Button
                    onClick={() => window.open(overview.Video)}
                    className={classes.videoButton}
                    variant="contained"
                  >
                    {title} Information Video
                  </Button>
                ) : (
                  <div />
                )}
              </div>
            ) : (
              <div />
            )}

            {/* Card Grids By Category */}
            {grids}
          </div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default withStyles(styles)(OrgPage);
