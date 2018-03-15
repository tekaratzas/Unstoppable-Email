import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(state => ({
    inbox: state.inbox
}))(class Inbox extends Component {
    renderMail(){
        return this.props.inbox.mail.length ? null : <p>You have no mail. Please find a job and/or friends and come back.</p>
    }
    render(){
        return (
            <div>
                <h1>Inbox</h1>
                { this.renderMail() }
            </div>
        )
    }
})