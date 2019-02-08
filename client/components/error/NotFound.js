import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Import custom component
import standardstyle from '../../styles/standardstyle';
import formstyle from '../../styles/formstyle';

const styles = {
    card: formstyle.card,
    content: formstyle.content,
    savemebutton: standardstyle.centeredbutton
}

class NotFound extends Component {
    
    constructor(props) {
        super(props);
    };
    
    render() {
        const { classes } = this.props;
        return (
            <div>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <div>
                        <Typography variant="h6">
                            Sorry, I think you've lost your way, would you like to return to the start?
                        </Typography>
                    </div>
                    <Link to={'/'}>
                        <Button variant="contained" className={classes.savemebutton}>
                            Save me!
                        </Button>
                    </Link>
                </CardContent>
            </Card>  
        </div>
        );
    }
}

export default withStyles(styles)(NotFound)