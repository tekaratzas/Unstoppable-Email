import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect()(class Inbox extends Component {
    render(){
        return (
            <h1>Inbox</h1>
        )
    }
})