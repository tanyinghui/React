import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RECEIPENT, BOXRECEIPENT, CUSTOMER } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';
import history from '../../utils/history';
  

// Import custom components
import ReceipentForm from '../common/ReceipentForm';

class RecipientLayout extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        formProps.id = localStorage.getItem('id');
        this.props.actions.storePhone(CUSTOMER, formProps);
        this.props.actions.storeReceipent(RECEIPENT, formProps);
        this.props.actions.storeBoxReceipent(BOXRECEIPENT, formProps).then(data => {
            history.push(data.data);
        });
    }

    render() {

        return(
            <div>
                <ReceipentForm onSubmit={this.submitForm}/>
            </div>
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