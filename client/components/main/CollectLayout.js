import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import MainForm from '../common/MainForm';
import * as crudAction from '../../actions/crudAction';
import { COLLECT } from '../../constants/actionType';
import history from '../../utils/history';

class CollectLayout extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(formProps) {
        this.props.actions.checkdata(COLLECT, formProps).then(data => {
            history.push(data.data)
        });
    }

    render() {
        return(
            <MainForm onSubmit={this.submitForm} errorMessage={this.props.errorMessage}/>
        )
    }
}

const mapStateToProps = state => ({
    path: state.path,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectLayout);