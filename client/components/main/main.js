import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {cyan, purple, orange} from '@material-ui/core/colors';
import NumPad from 'react-numpad';

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
    },

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

    constructor (props) {
        super(props);

        this.state = {
            videoURL: "/swagger/AdobeStock_185506961_Video_4K_Preview.mov"
        }
    }

    render() {
   //     const { classes } = this.props;
   //     const { value } = this.state;

    return (
       <div className='videobody'>
            <NumPad.Number
            onChange={(value) => { console.log('value', value)}}
            theme={myTheme}
            placeholder={'Please enter your number'}>

            </NumPad.Number>

            <video id="backgroundvideo" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
};
}
    mainUI.propTypes = {
        classes: PropTypes.object.isRequired,
        data: PropTypes.array,
    };


export default withStyles(styles)(mainUI)
