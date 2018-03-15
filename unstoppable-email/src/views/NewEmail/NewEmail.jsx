import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewEmailForm from './NewEmailForm';
import { getContract, getAccounts } from './../../actions/eth';


export default connect(state => ({
    eth: state.eth
}))(class CreateEmail extends Component {
    handleSendEmail(values){
       console.log(values);

       const contract = getContract();
       const accounts = getAccounts();

       contract.sendMail(accounts[0], values.subject, values.message, {
           gas: 3000000,
           from: accounts[0],
       }, (err, result) => {
           console.log(result);
       });
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