import React, { Component } from 'react';
import { connect } from 'react-redux';
import Eth from 'web3-eth';
import { setEth } from './actions/eth';

export default connect(state => ({
    eth: state.eth
}), {
    setEth
})(class Root extends Component {
    constructor(props){
        super(props);

        this.eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');
    }
    componentWillMount(){
        this.props.setEth(this.eth);
    }
    render(){
        return(
            <div>
                 <h1>Your Unstoppable Email</h1>
            </div>
        )
    }
});