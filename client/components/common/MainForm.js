import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/done';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/backspace';
import { Card, CardContent, InputAdornment } from '@material-ui/core'

// Import custom component
import renderText from './renderText';

const styles = {
    card: {
        padding: 2,
        width: 450,
        height: 380,
        position: 'absolute',
        top: '40%',
        left: 0,
        right: 0,
        margin: 'auto',
        opacity: 0.85
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: 'auto',
    },
    textField: {
        width: 400,
    },
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
};

class MainForm extends Component {

    handleClick = (e) => {
        // alert(e.currentTarget.value);
        var value = e.currentTarget.value;
        this.setState({value: this.state.value + value}, () => {
            this.props.change("phone", this.state.value);
        });
    };

    del = () => {
        this.setState({value: this.state.value.slice(0, -1)}, () => {
            this.props.change("phone", this.state.value);
        });
        this.buttonPressTimer = setTimeout(this.clear, 500);
    };

    clear = () => {
        this.setState({value: ''}, () => {
            this.props.change("phone", this.state.value);
        });
    };

    stopTimer = () => {
        clearTimeout(this.buttonPressTimer);
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.clear = this.clear.bind(this);
        this.del = this.del.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    };

    render() {
        const { handleSubmit, onSubmit, classes} = this.props;

        return(
            <div>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <div>
                        <Typography variant="h6">
                            Please enter your mobile number.
                        </Typography>
                    </div>
                    <div>
                        <form method="post" onSubmit={handleSubmit(onSubmit)}>
                            <Field
                                type="text"
                                label="Mobile Number"
                                name="phone"
                                component={renderText}
                                className={classes.textField}
                                value={this.state.value}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="submit"
                                            >
                                                {<DoneIcon/>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </form>
                        <div>
                            <Button variant="contained" className={classes.button1} value="1"  onClick = {this.handleClick} >1</Button>
                            <Button variant="contained" className={classes.button2} onClick = {this.handleClick} value="2">2</Button> 
                            <Button variant="contained" className={classes.button3} onClick = {this.handleClick} value="3">3</Button>
                            <Button variant="contained" className={classes.button4} onClick = {this.handleClick} value="4">4</Button>
                            <Button variant="contained" className={classes.button5} onClick = {this.handleClick} value="5">5</Button>
                            <Button variant="contained" className={classes.button6} onClick = {this.handleClick} value="6">6</Button>
                            <Button variant="contained" className={classes.button7} onClick = {this.handleClick} value="7">7</Button>
                            <Button variant="contained" className={classes.button8} onClick = {this.handleClick} value="8">8</Button>
                            <Button variant="contained" className={classes.button9} onClick = {this.handleClick} value="9">9</Button>
                            <Button variant="contained" className={classes.button0} onClick = {this.handleClick} value="0">0</Button>
                            <Button variant="contained" className={classes.buttonPlus} onClick = {this.handleClick} value="+">+</Button>
                            <Button variant="contained" className={classes.buttonDel}
                                onTouchStart = {this.del} onTouchEnd = {this.stopTimer}
                            >
                                <BackspaceIcon size="small"/>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        );
    }
};

const validateKeyIn = values => {
    const errors = {};

    const requiredFields = [
        'phone'
    ];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '(The ' + field + ' field is required.)';
        }  
    });

    if (values.phone && values.phone.length < 8) {
        errors.phone = '(Mobile number must be at least 8 digits.)';
    }

    return errors
};

MainForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'MainForm',
    validate: validateKeyIn
}) (withStyles(styles)(MainForm));