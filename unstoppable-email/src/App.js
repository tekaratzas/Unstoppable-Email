import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Root from './Root';
import eth from './reducers/eth';
import inbox from './reducers/inbox';

/* eslint-disable no-underscore-dangle */
let store = createStore(combineReducers({
  eth,
  inbox,
  form: formReducer
}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
, applyMiddleware(thunk));
/* eslint-enable */

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
