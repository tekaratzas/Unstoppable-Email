import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';
import { setContract } from './actions/eth';
import Home from './views/Home';
import abi from './ABI';

export default connect(state => ({
    eth: state.eth
}), {
    setContract
})(class Root extends Component {
    componentWillMount(){
        if(window.web3){
            console.log("Using web3 detected from external source like Metamask")
            const web3 = new Web3(window.web3.currentProvider);

            const EmailContract = web3.eth.contract(abi);
            console.log(abi);

            const emailInstance = EmailContract.at("0x1b7114e1671e1b889f6f78887dcb3e878139668a");
            
            emailInstance.sendMail(web3.eth.accounts[0], "hello", "hello", {
                gas: 30000,
                from: web3.eth.accounts[0]
            }, (err, result) => {
                console.log(result);
            });
            //this.props.setContract(emailInstance);
         }
    }
    render(){
        return(
            <div>
                {<Home />}
            </div>   
        )
    }
});



