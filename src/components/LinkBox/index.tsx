import React from 'react';
import { withStyles, Typography, createStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import "../Styles/Cards.css"

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
              className={"cardMedia"}
            />
          ) : (
              <CardHeader className={"cardMedia"} />
            )}

          <CardHeader className={"cardHeaderContainer"}
            title = {
              <Typography
                className={"cardHeader"}
                variant="h2"
              >{props.title}
              </Typography>
            }>

            {/* <Typography
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
            </Typography> */}
          </CardHeader>
        </Link>
      </CardActionArea>
    </Card>
  );
};

const styles = createStyles({
  card: {
    minWidth: 280,
  },
  disableLinkUnderline: {
    textDecoration: 'none',
  },
  text: {
    fontFamily: 'Lato',
  },
});

export default withStyles(styles)(LinkBox);
