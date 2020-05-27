import React, { Component } from 'react';
import {
  AppBar,
  withStyles,
  Typography,
  CssBaseline,
  Link,
} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import BottomBanner from '../../components/BottomBanner';

const styles = () => ({
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

class ResourcesPage extends Component {
  render() {
    const { classes, resources } = this.props;

    return (
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="static">
          <NavBar />
        </AppBar>

        {/* RESOURCES PAGE CONTENT */}
        <div
          style={{
            maxWidth: 750,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {this.decipher(resources, classes)}

          <div
            style={{
              marginTop: '1em',
              marginBottom: '1em',
              maxWidth: 750,
              fontSize: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Link
              style={{ marginLeft: '2em' }}
              inline
              color="secondary"
              href="/outsideOrganizations/Seattle"
            >
              Seattle
            </Link>
            <Link
              style={{ marginLeft: '2em' }}
              inline
              color="secondary"
              href="/outsideOrganizations/Spokane"
            >
              Spokane
            </Link>
            <Link
              style={{ marginLeft: '2em' }}
              inline
              color="secondary"
              href="/outsideOrganizations/Wyoming"
            >
              Wyoming
            </Link>
            <Link
              style={{ marginLeft: '2em' }}
              inline
              color="secondary"
              href="/outsideOrganizations/Alaska"
            >
              Alaska
            </Link>
            <Link
              style={{ marginLeft: '2em' }}
              inline
              color="secondary"
              href="/outsideOrganizations/Montana"
            >
              Montana
            </Link>
            <Link
              style={{ marginLeft: '2em' }}
              inline
              color="secondary"
              href="/outsideOrganizations/Idaho"
            >
              Idaho
            </Link>
          </div>
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
