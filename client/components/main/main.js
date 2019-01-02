import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, InputAdornment } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/backspace';
import DoneIcon from '@material-ui/icons/done';


const styles = () => ({
  root: {
    width: 450,
    height: 'auto',
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    margin: 'auto',
    },
  card: {
    padding: 2,
    height: 350,
    opacity: 0.85
    }, 
  textField: {
    width: 400,
    },  
  content: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto'
    }, 
  button1: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '120%',
    left: -146,
    right: 0,
    margin: 'auto',
    value: '1',
    label: '1'
  },
  button2: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '180%',
    left: -146,
    right: 0,
    margin: 'auto',
    value: '4',
    label: '4'
  },
  button3: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '240%',
    left: -146,
    right: 0,
    margin: 'auto',
    value: '7',
    label: '7'
  },
  button4: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '120%',
    left: 0,
    right: 0,
    margin: 'auto',
    value: '2',
    label: '2'
  },
  button5: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '180%',
    left: 0,
    right: 0,
    margin: 'auto',
    value: '5',
    label: '5'
  },
  button6: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '240%',
    left: 0,
    right: 0,
    margin: 'auto',
    value: '8',
    label: '8'
  },
  button7: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '120%',
    left: 146,
    right: 0,
    margin: 'auto',
    value: '3',
    label: '3'
  },
  button8: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '180%',
    left: 146,
    right: 0,
    margin: 'auto',
    value: '6',
    label: '6'
  },
  button9: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '240%',
    left: 146,
    right: 0,
    margin: 'auto',
    value: '9',
    label: '9'
  },
  button10: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '300%',
    left: 0,
    right: 0,
    margin: 'auto',
    value: '0',
    label: '0'
  },
  button11: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '300%',
    left: -146,
    right: 0,
    margin: 'auto'
  },
  button12: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '300%',
    left: 146,
    right: 0,
    margin: 'auto'
  },
  input: {
    display: 'none',
  },
});

// class mainUI
class mainUI extends React.Component {

  handleClick = event => {
    var value = event.currentTarget.value;
    this.setState({
       value: this.state.value + value
     });
  };

  del = () => {
    this.setState({
      value: this.state.value.slice(0, -1)
    });
    this.buttonPressTimer = setTimeout(this.clear, 1000);
  };

  clear = () => {
    this.setState({
      value: ''
    });
  };

  stopTimer = () => {
    clearTimeout(this.buttonPressTimer);
  }

  done = () => {
    let final = this.state.value;
    alert(final);
  };

  constructor(props) {
    super(props);
    this.video = {
      videoURL: '/swagger/PATAGONIA 8K.mkv',
      height: '100%',
      weight: '100%'
    };

    this.state = {
      value: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.done = this.done.bind(this);
    this.clear = this.clear.bind(this);
    this.del = this.del.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  render() {
    const { classes } = this.props;

    return(
      <div>
        <video id="backgroundvideo" loop autoPlay
        width={this.video.height}
        height={this.video.width}>
          <source src={this.video.videoURL} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
          <div>
            <Typography component="h6" variant="h6">
            Enter your mobile number.
            </Typography>
          </div>
          <div className={classes.content}>
            <TextField
              id="phone-number"
              label="Mobile Number"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={this.state.value}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Submit"
                      onClick={this.done}
                    >
                      {<DoneIcon/>}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div>
              <Button 
                variant="contained" size="medium" className={classes.button1} 
                value="1" onClick = {this.handleClick} 
              >
                1
              </Button>
              <Button 
                variant="contained" size="medium" className={classes.button2}
                value="4" onClick = {this.handleClick}
              >
                4
              </Button>
              <Button variant="contained" size="medium" className={classes.button3}
                value="7" onClick = {this.handleClick}
              >
                7
              </Button>
              <Button variant="contained" size="medium" className={classes.button4}
                value="2" onClick = {this.handleClick}
              >
                2
              </Button>
              <Button variant="contained" size="medium" className={classes.button5}
              value="5" onClick = {this.handleClick} 
              >
                5
              </Button>
              <Button variant="contained" size="medium" className={classes.button6}
                value="8" onClick = {this.handleClick}
              >
                8
              </Button>
              <Button variant="contained" size="medium" className={classes.button7}
                value="3" onClick = {this.handleClick}
              >
                3
              </Button>
              <Button variant="contained" size="medium" className={classes.button8}
                value="6" onClick = {this.handleClick}
              >
                6
              </Button>
              <Button variant="contained" size="medium" className={classes.button9}
                value="9" onClick = {this.handleClick}
              >
                9
              </Button>
              <Button variant="contained" size="medium" className={classes.button10}
                value="0" onClick = {this.handleClick}
              >
                0
              </Button>
              <Button variant="contained" size="medium" className={classes.button11}
                value="+"onClick = {this.handleClick}
              >
                +
              </Button>
              <Button variant="contained" size="medium" className={classes.button12}
                onMouseDown = {this.del} onMouseUp = {this.stopTimer}
              >
                <BackspaceIcon size="small"/>
              </Button>
            </div>
          </div>  
          </CardContent>              
        </Card>
        </div>
      </div>
    );
  }
}

mainUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(mainUI);