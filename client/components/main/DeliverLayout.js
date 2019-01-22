import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CUSTOMER, DELIVERER } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';
import history from '../../utils/history';

// Import custom components
import MainForm from '../common/MainForm';

class DeliverLayout extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        this.props.actions.storePhone(CUSTOMER, formProps);
        this.props.actions.storeDeliverer(DELIVERER, formProps).then(data => {
            localStorage.setItem('id', data.data.data.id);
        });
        history.push('/receipentform');
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