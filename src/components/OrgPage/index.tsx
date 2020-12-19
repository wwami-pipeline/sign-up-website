import React, { useState } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Grid,
  Button,
  createStyles,
} from '@material-ui/core';
import NavBar from '../NavBar';
import OrgItem from '../OrgItem';
import OtherItem from '../OtherItem';
import BottomBanner from '../BottomBanner';

const styles = createStyles({
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

interface OrgPageProps {
  classes?: any; // CSS-in-JS styling
  locations: any;
  overviews: any;
  images: any;
  signedIn: boolean;
}

const OrgPage: React.FC<OrgPageProps> = (props) => {
  const [openedItem, setOpenedItem] = useState<string>(window.location.pathname.split('/')[4]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [path, setPath] = useState<string>("");
  const [currPath, setCurrPath] = useState<string>("");
  const [images, setImages] = useState<any>();
  const [overview, setOverview] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [projects, setProjects] = useState<any>();

  const updateState = (location, org) => {
    if (props['images'] &&
      props['images'][location] !== undefined &&
      props['locations'] &&
      props['locations'][location] !== undefined
    ) {
      setOverview(props['overviews'][org]);
      setTitle(org);
      setPath(window.location.pathname);
      setProjects(props['locations'][location][org]);
      setTimeout(() => {
        setImages(props['images'][location][org]);
        setTimeout(() => {
          setImages(props['images'][location][org]);
        }, 1000)
      }, 500);
    }
  };

  if (path !== window.location.pathname) {
    const splitUrl = window.location.pathname.split('/');
    updateState(
      decodeURIComponent(splitUrl[2]),
      decodeURIComponent(splitUrl[3])
    );
    return <div />;
  }

  const { classes, signedIn, overviews } = props;

  if (path !== currPath) {
    setCurrPath(path);
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
  } else {
    return <div />
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
          <Grid item key={index} xs={12} sm={6} md={4}>
            {title === 'Others' ? (
              <OtherItem
                //@ts-ignore
                signedIn={signedIn}
                project={categories[category][project]}
                path={path}
              />
            ) : (
                <OrgItem
                  //@ts-ignore
                  openedItem={
                    categories[category][project]['Title'] ===
                    openedItem
                  }
                  signedIn={signedIn}
                  project={categories[category][project]}
                  imageUrl={images ? images[categories[category][project]['Title']] : ""}
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

export default withStyles(styles)(OrgPage);
