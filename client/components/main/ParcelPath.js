import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';
import defaultstyles from '../../styles/standardstyle';

const styles = {
    card: defaultstyles.card,
    content: defaultstyles.content,
    deliverbutton: defaultstyles.centeredbutton,
    donebutton: defaultstyles.centeredbutton,    
}
class ParcelPath extends Component {
    
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
                        <DoneIcon fontSize="large"/>
                    </div>
                    <div>
                        <Typography variant="h5">
                            Awesome.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">
                            Your parcel has been successfully deposited.
                        </Typography>
                    </div>
                    <div>
                        <Link to={'/deliverparcel'}>
                            <Button variant="contained" className={classes.deliverbutton}>
                                Deliver another
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <Button variant="contained" className={classes.donebutton} >
                                Okay, I'm done
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>  
        </div>
        );
    }
}

export default withStyles(styles)(ParcelPath)