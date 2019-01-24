import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import store from '../../store/store';
import history from '../../utils/history';
import ReceipentForm from '../common/ReceipentForm';
import * as crudAction from '../../actions/crudAction';
import { RECEIPENT, BOXRECEIPENT, CUSTOMER } from '../../constants/entity';

class RecipientLayout extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        formProps.id = store.getState().path.id;
        this.props.actions.storePhone(CUSTOMER, formProps);
        this.props.actions.storeReceipent(RECEIPENT, formProps);
        this.props.actions.storeBoxReceipent(BOXRECEIPENT, formProps).then(data => {
            history.push(data.data);
        });
    }

    render() {

        return(
            <ReceipentForm onSubmit={this.submitForm}/>
        )
    }
}

const mapStateToProps = state => ({
    path: state.path,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipientLayout);