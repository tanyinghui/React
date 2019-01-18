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
        var temp2 = [];
        temp2 = localStorage.getItem('deliverer');
        formProps.deliverer = temp2;
        this.props.actions.storePhone(CUSTOMER, formProps);
        this.props.actions.storeReceipent(RECEIPENT, formProps);
        this.props.actions.storeBoxReceipent(BOXRECEIPENT, formProps);
        history.push('/deliverparcel');
    }

    render() {

        return(
            <div>
                {/* <Link to={'/deliverparcel'}> */}
                    <ReceipentForm onSubmit={this.submitForm}/>
                {/* </Link> */}
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