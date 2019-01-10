import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { USERS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import Background from '../background/Background';
import MainForm from '../common/MainForm';

class MainLayout extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        this.props.actions.submitForm(USERS, formProps);
    }

    render() {
        return(
            <div>
                <Background />
                <MainForm onSubmit={this.submitForm} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
})

export default connect(null, mapDispatchToProps)(MainLayout);