import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import Root from './Root';
import eth from './reducers/eth';

let store = createStore(combineReducers({
  eth
}), applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
