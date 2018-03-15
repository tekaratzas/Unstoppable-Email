import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewEmailForm from './NewEmailForm';

export default connect(state => ({
    eth: state.eth
}))(class CreateEmail extends Component {
    handleSendEmail(values){
        console.log(values);
    }
    render() {
        return (
            <div>
                <h1>New Email</h1>
                <NewEmailForm onSubmit={this.handleSendEmail}/>
            </div>
        )
    }
});