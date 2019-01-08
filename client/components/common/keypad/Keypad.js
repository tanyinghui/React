import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import BackspaceIcon from '@material-ui/icons/backspace';

const Keypad = () => ({
    button1: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 150,
        left: -146,
        right: 0,
        margin: 'auto',
    },
    button2: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        margin: 'auto',
    },
    button3: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 150,
        left: 146,
        right: 0,
        margin: 'auto',
    },
    button4: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 200,
        left: -146,
        right: 0,
        margin: 'auto',
    },
    button5: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 200,
        left: 0,
        right: 0,
        margin: 'auto',
    },
    button6: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 200,
        left: 146,
        right: 0,
        margin: 'auto',
    },
    button7: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 250,
        left: -146,
        right: 0,
        margin: 'auto',
    },
    button8: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 250,
        left: 0,
        right: 0,
        margin: 'auto',
    },
    button9: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 250,
        left: 146,
        right: 0,
        margin: 'auto',
    },
    button0: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 300,
        left: 0,
        right: 0,
        margin: 'auto',
    },
    buttonPlus: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 300,
        left: -146,
        right: 0,
        margin: 'auto',
    },
    buttonDel: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 300,
        left: 146,
        right: 0,
        margin: 'auto',
    }
});

// class Keypad extends Component {

    // handleClick = event => {
    //     var value = event.currentTarget.value;
    //     this.setState({
    //         value: this.state.value + value
    //     });
    // };

    // del = () => {
    //     this.setState({
    //         value: this.state.value.slice(0, -1)
    //     });
    //     this.buttonPressTimer = setTimeout(this.clear, 500);
    // };

    // clear = () => {
    //     this.setState({
    //         value: ''
    //     });
    // };

    // stopTimer = () => {
    //     clearTimeout(this.buttonPressTimer);
    // };

    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         value: '',
    //     };

    //     this.handleClick = this.handleClick.bind(this);
    //     this.clear = this.clear.bind(this);
    //     this.del = this.del.bind(this);
    //     this.stopTimer = this.stopTimer.bind(this);
    // }

//     render() {
//         const { classes } = this.props;

//         return(
//             <div>
//                 <Buttons className={classes.button1} onClick = {this.handleClick} value="1">1</Buttons>
//                 <Buttons className={classes.button2} onClick = {this.handleClick} value="2">2</Buttons> 
//                 <Buttons className={classes.button3} onClick = {this.handleClick} value="3">3</Buttons>
//                 <Buttons className={classes.button4} onClick = {this.handleClick} value="4">4</Buttons>
//                 <Buttons className={classes.button5} onClick = {this.handleClick} value="5">5</Buttons>
//                 <Buttons className={classes.button6} onClick = {this.handleClick} value="6">6</Buttons>
//                 <Buttons className={classes.button7} onClick = {this.handleClick} value="7">7</Buttons>
//                 <Buttons className={classes.button8} onClick = {this.handleClick} value="8">8</Buttons>
//                 <Buttons className={classes.button9} onClick = {this.handleClick} value="9">9</Buttons>
//                 <Buttons className={classes.button0} onClick = {this.handleClick} value="0">0</Buttons>
//                 <Buttons className={classes.buttonPlus} onClick = {this.handleClick} value="+">+</Buttons>
//                 <Buttons className={classes.buttonDel}><BackspaceIcon size="small"/></Buttons>
//             </div>
//         )
//     }
// };

// Keypad.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default Keypad;