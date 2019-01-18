import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CUSTOMER, DELIVERER } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import MainForm from '../common/MainForm';

class DeliverLayout extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        this.props.actions.storePhone(CUSTOMER, formProps);
        this.props.actions.storeDeliverer(DELIVERER, formProps);
        var temp = formProps.deliverer;
        localStorage.setItem('deliverer', temp);
    }

    render() {

        return(
            <div>
                <MainForm onSubmit={this.submitForm}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    path: state.path,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliverLayout);