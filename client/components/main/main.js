import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';


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
    opacity: 0.8
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

const keyboards = [
  {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '63%',
    left: 146,
    right: 0,
    margin: 'auto',
    value: '0',
    label: '0'
  }
]; 



// class mainUI
class mainUI extends React.Component {
  state = {
     phonenumber: '2',
  };

   handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = (event) => {
    alert('hello');
    this.setState({
      phonenumber: event.target.value
    });
  };

  constructor(props) {
    super(props);
    this.video = {
      videoURL: '/swagger/PATAGONIA 8K.mkv',
      height: '100%',
      weight: '100%'
    };
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
              value={this.state.phonenumber}
              onChange={this.handleChange('phonenumber')}
            >


            </TextField>
            <div>
      <Button variant="contained" size="medium" className={classes.button1}>
        1
      </Button>
      <Button variant="contained" size="medium" className={classes.button2}>
        4
      </Button>
      <Button variant="contained" size="medium" className={classes.button3}>
        7
      </Button>
      <Button variant="contained" size="medium" className={classes.button4}>
        2
      </Button>
      <Button variant="contained" size="medium" className={classes.button5}>
        5
      </Button>
      <Button variant="contained" size="medium" className={classes.button6}>
        8
      </Button>
      <Button variant="contained" size="medium" className={classes.button7}>
        3
      </Button>
      <Button variant="contained" size="medium" className={classes.button8}>
        6
      </Button>
      <Button variant="contained" size="medium" className={classes.button9}>
        9
      </Button>
      <Button variant="contained" size="medium" className={classes.button10}>
        0
      </Button>
      <Button variant="contained" size="medium" className={classes.button11}>
        CLEAR
      </Button>
      <Button variant="contained" size="medium" className={classes.button12}>
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




/*
function Buttons(props) {
  // eslint-disable-next-line react/prop-types
  const { classes } = props;
  
return (
    <div>
      <Button variant="contained" size="medium" className={classes.button1}>
        1
      </Button>
      <Button variant="contained" size="medium" className={classes.button2}>
        4
      </Button>
      <Button variant="contained" size="medium" className={classes.button3}>
        7
      </Button>
      <Button variant="contained" size="medium" className={classes.button4}>
        2
      </Button>
      <Button variant="contained" size="medium" className={classes.button5}>
        5
      </Button>
      <Button variant="contained" size="medium" className={classes.button6}>
        8
      </Button>
      <Button variant="contained" size="medium" className={classes.button7}>
        3
      </Button>
      <Button variant="contained" size="medium" className={classes.button8}>
        6
      </Button>
      <Button variant="contained" size="medium" className={classes.button9}>
        9
      </Button>
      <Button variant="contained" size="medium" className={classes.button10}>
        0
      </Button>
      <Button variant="contained" size="medium" className={classes.button11}>
        CLEAR
      </Button>
      <Button variant="contained" size="medium" className={classes.button12}>
        <BackspaceIcon size="small"/>
      </Button>
    </div>
  );
}

Buttons.PropTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons); */