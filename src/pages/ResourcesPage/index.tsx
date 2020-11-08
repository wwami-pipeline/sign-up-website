import React from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Link,
  createStyles,
} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import BottomBanner from '../../components/BottomBanner';

interface ResourcesPageProps {
  classes?: any; // CSS-in-JS styling
  resources: any;
}

const ResourcesPage: React.FC<ResourcesPageProps> = (props) => {
  const { classes } = props;

  let type = window.location.pathname.split('/')[2]; // Get resource type from URL
  if (type === 'links') {
    type = 'Service Learning Website Links';
  } else if (type === 'videos') {
    type = 'Service Learning Training Videos';
  } else if (type === 'tools') {
    type = 'Teaching Tools';
  } else {
    type = 'Protocols';
  }

  const resources = props.resources ? props.resources[type] : {};

  return (
    <div className={classes.page}>
      <CssBaseline />
      <AppBar position="static">
        <NavBar />
      </AppBar>

      {/* RESOURCE PAGE CONTENT */}
      <div
        style={{
          maxWidth: 750,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {decipher(resources, classes)}
      </div>
      <BottomBanner />
    </div>
  );
}

const styles = createStyles({
  page: {
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '1.2em',
    marginTop: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 750,
  },
  description: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '1.1em',
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  directionTitleTop: {
    fontFamily: 'Lato',
    margin: '30px 0 15px 0',
    textAlign: 'center',
    textDecoration: 'underline',
  },
});

const processText = (text, classes) => {
  const split = text.split(' ');
  let arr = [{ type: 'p', value: '' }];
  for (let i = 0; i < split.length; i++) {
    if (split[i].includes('http')) {
      arr.push({ type: 'link', value: split[i] });
    } else if (split[i].includes('@') && split[i].includes('.')) {
      arr.push({ type: 'email', value: split[i] });
    } else {
      if (arr[arr.length - 1].type === 'p') {
        arr[arr.length - 1].value += ' ' + split[i];
      } else {
        arr.push({ type: 'p', value: split[i] });
      }
    }
  }
  return (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      {arr.map((item) => (
        <div style={{ display: 'inline' }}>
          {item.type === 'p' ? (
            <Typography
              inline
              variant="subtitle1"
              className={classes.description}
            >
              {item.value + ' '}
            </Typography>
          ) : item.type === 'email' ? (
            <Typography
              variant="subtitle1"
              className={classes.description}
              inline
            >
              <Link
                inline
                color="secondary"
                href={'mailto://' + item.value.replace(/[()]/g, '')}
                target="_blank"
              >
                {item.value}
              </Link>
            </Typography>
          ) : (
                <Typography
                  variant="subtitle1"
                  className={classes.description}
                  inline
                >
                  <Link inline color="secondary" href={item.value} target="_blank">
                    {item.value}
                  </Link>
                </Typography>
              )}
        </div>
      ))}
    </div>
  );
};

const decipher = (obj, classes) => {
  return (
    <div>
      {obj ? (
        Object.keys(obj).map((key) => {
          const curr = obj[key];
          if (curr.type === 'section-title') {
            return (
              <div>
                <Typography
                  className={classes.directionTitleTop}
                  variant="h5"
                >
                  {curr.value}
                </Typography>
              </div>
            );
          } else if (curr.type === 'subsection-title') {
            return (
              <Typography variant="overline" className={classes.title}>
                {curr.value}
              </Typography>
            );
          } else if (curr.type === 'italics') {
            return (
              <Typography className={classes.description}>
                <i>{curr.value}</i>
              </Typography>
            );
          } else {
            return processText(curr.value, classes);
          }
        })
      ) : (
          <div />
        )}
    </div>
  );
};

export default withStyles(styles)(ResourcesPage);
