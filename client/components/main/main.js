import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {cyan, purple, orange} from '@material-ui/core/colors';
import NumPad from 'react-numpad';
import ReactPlayer from 'react-player'


const styles = theme => ({
    body: {
        backgroundColor: 'red'
    },
    root: {
        paddingTop: 0,
    },
    subheader: {
        fontSize: 24,
        backgroundColor: cyan[600],
        color: '#FFFFFF'
    }
});

const myTheme = {
    header: {
      primaryColor: '#263238',
      secondaryColor: '#f9f9f9',
      highlightColor: '#FFC107',
      backgroundColor: '#607D8B',
    },
    body: {
      primaryColor: '#263238',
      secondaryColor: '#32a5f2',
      highlightColor: '#FFC107',
      backgroundColor: '#f9f9f9',
    },
    panel: {
      backgroundColor: '#CFD8DC'
    }
  };

class mainUI extends React.Component {



    render() {
   //     const { classes } = this.props;
   //     const { value } = this.state;

    return (
       <div class='videobody'>
            <NumPad.Number
            onChange={(value) => { console.log('value', value)}}
            theme={myTheme}
            placeholder={'Please enter your number'}>

            </NumPad.Number>

            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        </div>
    )
};
}
    mainUI.propTypes = {
        classes: PropTypes.object.isRequired,
        data: PropTypes.array,
    };


export default withStyles(styles)(mainUI)
