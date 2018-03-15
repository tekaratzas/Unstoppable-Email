import React, { Component } from 'react';
import TabHeader from './TabHeader';

export default class Tabs extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab: "",
        }
    }
    setSelectedTab(selectedTab){
        this.setState({selectedTab});
    }
    renderHeaders(){
        return Object.keys(this.props.tabs).map((t, i) => <TabHeader key={i} onTabClick={() => this.setSelectedTab(t)}>{t}</TabHeader>);
    }
    renderTab(){
        return this.props.tabs[this.state.selectedTab || Object.keys(this.props.tabs)[0]];
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