import React, { Component } from 'react';

export default class Tabs extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab: "",
        }
    }
    renderHeaders(){
        return Object.keys(this.props.tabs).map((t, i) => <div>{t}</div>);
    }
    renderTab(){
        return this.props.tab[selectedTab || Object.keys(this.props.tabs)[0]];
    }
    render(){
        return(
            <div>
                {this.renderHeaders()}
                {this.renderTab()}
            </div>
        )
    }
}