import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, CardActions } from '@material-ui/core';
import React from 'react';

const styles = () => ({
  title: {
    marginBottom: '.5em'
  },
  text: {
    fontFamily: 'Lato',
    marginBottom: '1em'
  },
  card: {
    paddingBottom: 5,
  },
  textItem: {
    fontFamily: 'Lato',
    marginBottom: 8
  }
});

class OrgItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  render() {
    const { classes, project } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          fullWidth
          maxWidth="lg">
          <DialogTitle>
            <Typography variant="h4">{project['Title']}</Typography>
          </DialogTitle>
          <DialogContent className={this.props.dialogContent}>
            {Object.keys(project).map(key => {
              if (key !== 'Title')
                return (
                  <Typography
                    className={classes.textItem}
                    gutterBottom
                    align="left"
                    component="p"
                  >
                    <b>{key}:</b>
                    {project[key]}
                  </Typography>
                );
              return <div />;
            })}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ modalOpen: false })}
              color="white"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.text} gutterBottom align="left" variant="h5">
              {project['Title']}
            </Typography>
            <Typography className={classes.text} gutterBottom align="left" component="p">
              <b>Location: </b> {project['Location']}
            </Typography>
            <Typography className={classes.text} align="left" component="p">
              <b>Description: </b> {project['Description']}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.text} size="small" 
              onClick={() => this.setState({ modalOpen: true })}>
              View
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(OrgItemModal);
