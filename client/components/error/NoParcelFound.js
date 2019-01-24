import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { Link } from 'react-router-dom';

// Import custom component
import defaultstyles from '../../styles/standardstyle';

const styles = {
    card: defaultstyles.card,
    content: defaultstyles.content,
    savemebutton: defaultstyles.centeredbutton,
    homebutton: defaultstyles.centeredbutton
}

class CollectParcel extends Component {
    
    constructor(props) {
        super(props);
    };
    
    render() {
        const { classes } = this.props;
        return (
            <div>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <div className={classes.text}>
                        <ErrorIcon fontSize="large"/>
                        <div>
                            <Typography variant="h5">
                                Oops.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6">
                                No Parcel Found. 
                            </Typography>
                        </div>
                    </div>
                    <Link to={'/'}>
                        <Button variant="contained" className={classes.homebutton}>
                            Home
                        </Button>
                    </Link>
                </CardContent>
            </Card>  
        </div>
        );
    }
}

export default withStyles(styles)(CollectParcel)