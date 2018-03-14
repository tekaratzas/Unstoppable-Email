import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';


export default connect(state => ({

}), {

})(class Root extends Component {
    constructor(props){
        super(props);

        var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    }
    render(){
        return(
            <h1>Your Unstoppable Email</h1>
        )
    }
});