import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Card, CardContent, InputAdornment } from '@material-ui/core'

// Import custom component
import renderText from './renderText';
import formstyle from '../../styles/formstyle';

const styles = {
    card: formstyle.card,
    content: formstyle.content,
    textField: formstyle.textField,
    button1: formstyle.button1,
    button2: formstyle.button2,
    button3: formstyle.button3,
    button4: formstyle.button4,
    button5: formstyle.button5,
    button6: formstyle.button6,
    button7: formstyle.button7,
    button8: formstyle.button8,
    button9: formstyle.button9,
    button0: formstyle.button0,
    buttonPlus: formstyle.buttonPlus,
    buttonDel: formstyle.buttonDel
};

class ReceipentForm extends Component {
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

    handleClick = (e) => {
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

    render() {
        const { handleSubmit, onSubmit, classes } = this.props;

        return(
            <div>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <div>
                        <Typography variant="h6">
                            Enter your customer's mobile number.
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
                            <Button variant="contained" className={classes.button1} onClick = {this.handleClick} value="1">1</Button>
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

ReceipentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'RecipientnForm',
    validate: validateKeyIn
}) (withStyles(styles)(ReceipentForm));
