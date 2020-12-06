import React from 'react';
import { withStyles, Typography, createStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

const LinkBox = (props) => {
  const { classes } = props;
  var h2Height = props.name ? "36px" : "50px";
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link
          to={{ pathname: props.path }}
          className={classes.disableLinkUnderline}
        >
          {props.imageLocation ? (
            <CardMedia
              component="img"
              aria-label={props.title + ' image'}
              image={props.imageLocation ? props.imageLocation : ''}
              title={props.title}
              className={classes.image}
            />
          ) : (
              <CardHeader className={classes.image} />
            )}

          <CardContent style={{ backgroundColor: '#F4EFA8' }}>
            <Typography
              variant="h5"
              style={{ color: '#2E1159', fontFamily: 'Lato', lineHeight: h2Height }}
              component="h2"
            >
              <span> {props.title} </span>
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: '#2E1159',
                fontWeight: 'bold',
                fontFamily: 'Lato',
                lineHeight: '1em'
              }}
              component="h3"
            >
              {props.name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

const styles = createStyles({
  card: {
    minWidth: 280,
  },
  image: {
    height: 360,
    objectFit: 'cover',
  },
  disableLinkUnderline: {
    textDecoration: 'none',
  },
  text: {
    fontFamily: 'Lato',
  },
});

export default withStyles(styles)(LinkBox);
