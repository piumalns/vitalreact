import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createLogicMiddleware } from "redux-logic";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer';
import { Provider } from 'react-redux';
import services from './services'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Create redux-logic middleware
const logicMiddleware = createLogicMiddleware(services, {});

// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware = applyMiddleware(logicMiddleware);

// Create enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);

// Create store
const store = createStore(reducer, enhancer);

// const store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
