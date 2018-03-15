import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect()(class CreateEmail extends Component {
    render() {
        return (
            <h1>New Email</h1>
        )
    }
});