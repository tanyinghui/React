import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import MainForm from '../common/MainForm';
import { CUSTOMER, DELIVERER } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';
import * as commonAction from '../../actions/commonAction';
import history from '../../utils/history';

class DeliverLayout extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        this.props.actions.storePhone(CUSTOMER, formProps);
        this.props.actions.storeDeliverer(DELIVERER, formProps).then(data => {
            let id = data.data.data.id;
            let deliverer = data.data.data.deliverer;
            this.props.save.deliver(id, deliverer);
        });
        history.push('/receipentform');
    }

    render() {
        return(
            <MainForm onSubmit={this.submitForm}/>
        )
    }
}

const mapStateToProps = state => ({
    path: state.path,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
    save: bindActionCreators(Object.assign({}, commonAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliverLayout);