import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';

const styles = () => ({
  dialogBody: {
    backgroundColor: '#B1A6C1',
  },
  dialogBorder: {
    backgroundColor: '#513E6D',
    height: '20px',
  },
  dialogContent: {
    maxHeight: '600px',
  },
  title: {
    marginBottom: '.5em',
  },
  text: {
    color: 'black',
    fontFamily: 'Lato',
    marginTop: '1em',
    marginBottom: '1em',
    fontSize: 16,
  },
  textCaps: {
    fontFamily: 'Lato',
    textTransform: 'uppercase',
  },
});

const processText = (text) => {
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
            <span>{item.value + ' '}</span>
          ) : item.type === 'email' ? (
            <a
              href={'mailto://' + item.value.replace(/[()]/g, '')}
              style={{ color: '#F4EFA8' }}
            >
              {item.value}
            </a>
          ) : (
            <a href={item.value} style={{ color: '#F4EFA8' }}>
              {item.value}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

class Requirements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: props.title,
      open: false,
    };
    Object.keys(props.data).forEach((key) => {
      this.state.items.push(props.data[key]);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          className={classes.dialog}
          open={this.props.open}
          onClose={this.props.handleClose}
          fullWidth
        >
          <div className={classes.dialogBorder} />
          <DialogTitle className={classes.dialogBody}>
            <Typography variant="h4" className={classes.textCaps}>
              {this.state.title}
            </Typography>
          </DialogTitle>
          <div className={classes.dialogBody}>
            <DialogContent className={classes.dialogContent}>
              {this.state.items.map((item) => {
                if (item.type === 'title') {
                  return (
                    <Typography className={classes.text}>
                      <b>{item.value}</b>
                    </Typography>
                  );
                } else if (item.type === 'italics') {
                  return (
                    <Typography className={classes.text}>
                      <i>{item.value}</i>
                    </Typography>
                  );
                } else {
                  return processText(item.value);
                }
              })}
            </DialogContent>
          </div>
          <div className={classes.dialogBorder} />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Requirements);
