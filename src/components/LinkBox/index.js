import React from "react";
import { withStyles,
  Typography
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const styles = () => ({
  card: {
    minWidth: 280,
  },
  image: {
    maxHeight: 280,
    objectFit: "cover"
  },
  disableLinkUnderline: {
    textDecoration: 'none'
  },
  text: {
    fontFamily: 'Lato'
  }
});

const LinkBox = props => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={{ pathname: props.path }}
          className={classes.disableLinkUnderline} >
          <CardMedia
            component="img"
            alt={props.title}
            image={props.imageLocation}
            title={props.title}
            className={classes.image}
          />
          <CardContent style={{ backgroundColor: "#F4EFA8" }}>
            <Typography variant="h5" style={{ color: "#2E1159", fontFamily: "Lato" }} component="h2">
              {props.title}
            </Typography>
            <Typography variant="body1" style={{color: "#2E1159", fontWeight: "bold", fontFamily: "Lato"}} component="h3">
              {props.name}
            </Typography>
            <Typography variant="body1" style={{color: "#2E1159", fontFamily: "Lato"}} component="p">
              {props.description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(LinkBox);
