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
  description: {
    color: '#2E1159',
    fontFamily: 'Lato',
    fontSize: '1.1em',
    maxWidth: 750,
    marginLeft: '10px',
  },
  directionTitleTop: {
    color: '#2E1159',
    fontFamily: 'Lato',
    margin: '30px 0 15px 0',
    textAlign: 'center',
    textDecoration: 'underline',
  },
  italics: {
    color: '#2E1159',
    fontFamily: 'Lato',
    fontSize: '1.1em',
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  gridTitle: {
    color: '#2E1159',
    fontFamily: 'Lato',
    marginBottom: '1em',
    textTransform: 'uppercase',
  },
  mainGrid: {
    backgroundColor: '#DAD9E1',
    borderRadius: '2px',
    margin: '1.5em auto 1em auto',
    maxWidth: 1250,
    padding: '1em',
    textAlign: 'center',
  },
  page: {
    overflow: 'hidden',
    fontFamily: 'Lato',
  },
  paperContainer: {
    backgroundColor: '#DAD9E1',
    borderRadius: '2px',
    margin: '1.5em auto 1em auto',
    maxWidth: 1250,
    padding: '1em',
    textAlign: 'center',
  },
  title: {
    color: '#2E1159',
    fontFamily: 'Lato',
    fontSize: '1.4em',
    margin: '1em 0 0 10px',
    textAlign: 'left',
  },
  text: {
    color: '#2E1159',
    fontFamily: 'Lato',
    margin: 'auto',
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
    <div style={{ marginTop: 10, marginBottom: 10, textAlign: 'left' }}>
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
        <Paper className={classes.paperContainer}>
          <Typography
            className={classes.text}
            variant="h4"
            style={{ margin: '0.5em 0 1.5em 0' }}
          >
            OTHER {location.toUpperCase()} STUDENT ORGANIZATIONS
          </Typography>

          <Typography
            className={classes.text}
            style={{ marginBottom: '1.5em', fontSize: 24, fontWeight: 'bold' }}
          >
            Service Learning* is just one way to participate outside of the
            classroom!
          </Typography>

          <Typography
            className={classes.text}
            style={{ marginBottom: '1.5em', fontSize: 20, fontWeight: 'bold' }}
          >
            For contact information on the groups listed below, click here
          </Typography>

          <Typography className={classes.text} style={{ fontSize: 16 }}>
            *Service Learning at the SOM is defined as providing service to
            external, rather than internal communities.
          </Typography>
        </Paper>

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
                className={classes.paperContainer}
                style={{
                  padding: '1em',
                  height: 600,
                  overflowY: 'scroll',
                }}
              >
                <Typography className={classes.gridTitle} variant="h4">
                  Committees
                </Typography>
                {this.decipher(outsideOrgs['Committees'], classes)}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                className={classes.paperContainer}
                style={{
                  padding: '1em',
                  height: 600,
                  overflowY: 'scroll',
                }}
              >
                <Typography className={classes.gridTitle} variant="h4">
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
                <Typography className={classes.italics}>
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
