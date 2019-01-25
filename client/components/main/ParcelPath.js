import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import standardstyle from '../../styles/standardstyle';
import store from '../../store/store';
import { DELIVERER } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';
import * as commonAction from '../../actions/commonAction';

const styles = {
    card: standardstyle.card,
    content: standardstyle.content,
    deliverbutton: standardstyle.centeredbutton,
    donebutton: standardstyle.centeredbutton,    
}

class ParcelPath extends Component {
    
    constructor(props) {
        super(props);
        this.deliveranother = this.deliveranother.bind(this);
    };

    deliveranother(data) {
        data.deliverer = store.getState().path.deliverer;
        this.props.actions.storeAnother(DELIVERER, data).then(data => {
            let id = data.data.data.id;
            let deliverer = data.data.data.deliverer;
            this.props.save.deliver(id, deliverer);
        });
    }
    
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
                            <Link to={'/receipentform'}>
                                <Button variant="contained" className={classes.deliverbutton} onClick={this.deliveranother}>
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

const mapStateToProps = state => ({
    path: state.path,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
    save: bindActionCreators(Object.assign({}, commonAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ParcelPath));