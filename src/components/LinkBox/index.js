import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = () => ({
  card: {
    minWidth: 280,
  },
  image: {
    height: 200,
    objectFit: "cover"
  },
  disableLinkUnderline: {
    textDecoration: 'none'
  }
});

const LinkBox = props => {
  const { classes } = props;
  const data = props.data;
  const description = props.description;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <Link to={props.path} render={(data) => {return(<UDSM {...data} {...props}  />)}}> */}
        <Link
          to={{
            pathname: props.path,
            state: {
              data,
              description
            }
          }}
          className={classes.disableLinkUnderline}
        >
          <CardMedia
            component="img"
            alt={props.title}
            image={props.imageLocation}
            title={props.title}
            className={classes.image}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.name}
            </Typography>
            <Typography variant="body" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(LinkBox);
