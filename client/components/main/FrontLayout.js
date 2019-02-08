import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Import custom components
import standardstyle from '../../styles/standardstyle';
import formstyle from '../../styles/formstyle';
import * as commonAction from '../../actions/commonAction';

const styles = {
    card: formstyle.card,
    content: formstyle.content,
    title: standardstyle.title,
    deliverbutton: standardstyle.centeredbutton,
    collectbutton: standardstyle.centeredbutton,
};

class FrontLayout extends Component {
    
    constructor(props) {
        super(props);
    };

    deliver = () => {
        this.props.dispatch(commonAction.deliver());
    }

    collect = () => {
        this.props.dispatch(commonAction.collect());
    }
    
    render() {
        const { classes } = this.props;
        return(
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <div className={classes.title}>
                            <Typography variant="h4">
                                Hello.
                            </Typography>
                            <Typography variant="h6">
                                What would you like to do today?
                            </Typography>
                        </div>
                        <Link to={'/deliverform'}>
                            <Button variant="contained" className={classes.deliverbutton}
                                onClick={this.deliver}>
                                Deliver
                            </Button>
                        </Link>
                        <Link to={'/collectform'}>
                            <Button variant="contained" className={classes.collectbutton}
                                onClick={this.collect}>
                                Collect
                            </Button>
                        </Link>
                    </CardContent>
                </Card>  
            </div>
        )
    }
};

FrontLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    path: state.path,
});

export default connect(mapStateToProps)(withStyles(styles)(FrontLayout));
