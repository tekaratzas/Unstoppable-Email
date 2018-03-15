import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from './../../components/Tabs';
import Inbox from './../Inbox';
import NewEmail from './../NewEmail';
import './style.css';


export default connect()(class Home extends Component {
    render() {
        return (
            <div className={"home-container"}>
                <div className={"home-content"}>
                    <h1>Your Unstoppable Email</h1>
                    <Tabs tabs={{"Inbox": <Inbox />, "Send": <NewEmail />}}/>
                 </div>
            </div>
        )
    }
});