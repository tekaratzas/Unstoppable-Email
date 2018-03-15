import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewEmailForm from './NewEmailForm';

export default connect()(class CreateEmail extends Component {
    render() {
        return (
            <div>
                <h1>New Email</h1>
                <NewEmailForm />
            </div>
        )
    }
});