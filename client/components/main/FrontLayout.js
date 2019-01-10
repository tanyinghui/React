import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Import custom components
import Background from '../background/Background';

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
        padding: 40,
    },
    button1: {
        width: 400,
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 200,
        margin: 'auto',
    },
    button2: {
        width: 400,
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 260,
        margin: 'auto',
    },
};

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
        <Background />
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <div>
                    <Typography variant="h4">
                        Hello.
                    </Typography>
                    <Typography variant="h6">
                        What would you like to do today?
                    </Typography>
                </div>
                <Link to={'/deliver'}>
                    <Button variant="contained" className={classes.button1}>
                        Deliver
                    </Button>
                </Link>
                <Link to={'/collect'}>
                    <Button variant="contained" className={classes.button2}>
                        Collect
                    </Button>
                </Link>
            </CardContent>
        </Card>  
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
