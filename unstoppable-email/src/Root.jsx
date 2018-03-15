import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';
import { setContract } from './actions/eth';
import Home from './views/Home';
import abi from './ABI';

export default connect(state => ({
}), {
    setContract
})(class Root extends Component {
    constructor(props){
        super(props);

        if(window.web3){
            console.log(window.web3);
            console.log("Using web3 detected from external source like Metamask")
            this.web3 = new Web3(window.web3.currentProvider)
         }else{
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
         }

         const EmailContract = this.web3.eth.contract(abi);

         this.emailInstance = EmailContract.at("0x1b7114e1671e1b889f6f78887dcb3e878139668a");
    }
    componentWillMount(){
        this.props.setContract(this.emailInstance);
    }
    render(){
        return(
            <Home />
        )
    }
});



