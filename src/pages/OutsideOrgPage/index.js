import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Link,
  Paper,
  Grid,
} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import BottomBanner from '../../components/BottomBanner';

const styles = () => ({
  page: {
    overflow: 'hidden',
    fontFamily: 'Lato',
  },
  title: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '1.4em',
    marginTop: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
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

class ResourcesPage extends Component {
  render() {
    const { classes } = this.props;

    const location = window.location.pathname.split('/')[2]; // Get location from URL

    const outsideOrgs = this.props.outsideOrgs[location]
      ? this.props.outsideOrgs[location]
      : {};

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <NavBar />
        </AppBar>

        <div
          style={{
            marginTop: '1.5em',
            maxWidth: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" style={{ marginBottom: '1em' }}>
            EXPLORE OTHER OPPORTUNITIES IN {location.toUpperCase()}
          </Typography>

          <Typography style={{ marginBottom: '0.5em', fontSize: 17 }}>
            Service Learning* is just one way to participate in activities
            outside of the classroom. Please check out these other opportunities
            for SOM students to get involved!
          </Typography>

          <Typography style={{ marginBottom: '0.5em', fontSize: 17 }}>
            *Although many organizations involve service, Service Learning at
            the SOM is defined in a more limited way as providing service to our
            external, rather than internal communities.
          </Typography>
        </div>

        {/* RESOURCES PAGE CONTENT */}
        <div
          style={{
            marginTop: '1.5em',
            marginBottom: '1em',
            maxWidth: 1250,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
              <Paper
                style={{
                  margin: '1em',
                  padding: '1em',
                  height: 800,
                  overflowY: 'scroll',
                }}
              >
                <Typography style={{ marginBottom: '1em' }} variant="h4">
                  Committees
                </Typography>
                {this.decipher(outsideOrgs['Committees'], classes)}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                style={{
                  margin: '1em',
                  padding: '1em',
                  height: 800,
                  overflowY: 'scroll',
                }}
              >
                <Typography style={{ marginBottom: '1em' }} variant="h4">
                  Student Interest Groups
                </Typography>
                {this.decipher(outsideOrgs['StudentInterestGroups'], classes)}
              </Paper>
            </Grid>
          </Grid>
        </div>
        <BottomBanner />
      </div>
    );
  }

  decipher = (obj, classes) => {
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
}

export default withStyles(styles)(ResourcesPage);
