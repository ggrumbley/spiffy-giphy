import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from './containers/App';

import './styles/_normalize.css';
import './styles/main.css';

import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
