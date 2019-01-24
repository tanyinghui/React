import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';

// Import custom component
import standardstyle from '../../styles/standardstyle';

const styles = {
    card: standardstyle.card,
    content: standardstyle.content,
    savemebutton: standardstyle.centeredbutton,
    homebutton: standardstyle.centeredbutton
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
                            <DoneIcon fontSize="large"/>
                                <div>
                                    <Typography variant="h5">
                                        Perfect.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6">
                                        Collect your parcel below.
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