import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './views/Home';

export default connect(state => ({
    eth: state.eth
}), {
    
})(class Root extends Component {
    componentWillMount(){

    }
    render(){
        return(
            <div>
                {<Home />}
            </div>   
        )
    }
});



